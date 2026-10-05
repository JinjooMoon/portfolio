import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { ProjectGalleryItem } from "../../components/project-page/project-page-types";

const galleryProjects = {
  "penrith-city-council": { folder: "penrith", prefix: "penrith", label: "Penrith" },
  "agriculture-victoria": { folder: "agriculture-victoria", prefix: "agriculture", label: "Agriculture Victoria" },
  "business-victoria": { folder: "business-victoria", prefix: "bv", label: "Business Victoria" },
  "outdoor-recreation-victoria": { folder: "outdoor-recreation-victoria", prefix: "orv", label: "Outdoor Recreation Victoria" },
  "local-councils-sa": { folder: "local-councils-sa", prefix: "sa-councils", label: "Local Councils SA" },
} as const;

type ImageDimensions = { width: number; height: number };
type GalleryCaption = { title?: unknown; description?: unknown };

function positiveDimensions(width: number, height: number): ImageDimensions | undefined {
  return width > 0 && height > 0 ? { width, height } : undefined;
}

function getJpegDimensions(buffer: Buffer): ImageDimensions | undefined {
  const frameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    while (buffer[offset] === 0xff) offset += 1;
    const marker = buffer[offset];
    offset += 1;
    if (marker === undefined || marker === 0xda || marker === 0xd9) return undefined;
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
    if (offset + 2 > buffer.length) return undefined;

    const segmentLength = buffer.readUInt16BE(offset);
    if (frameMarkers.has(marker) && offset + 7 <= buffer.length) {
      return positiveDimensions(buffer.readUInt16BE(offset + 5), buffer.readUInt16BE(offset + 3));
    }
    if (segmentLength < 2) return undefined;
    offset += segmentLength;
  }

  return undefined;
}

function getWebpDimensions(buffer: Buffer): ImageDimensions | undefined {
  if (buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") return undefined;

  const chunkType = buffer.toString("ascii", 12, 16);
  if (chunkType === "VP8X" && buffer.length >= 30) {
    return positiveDimensions(buffer.readUIntLE(24, 3) + 1, buffer.readUIntLE(27, 3) + 1);
  }
  if (chunkType === "VP8 " && buffer.length >= 30) {
    return positiveDimensions(buffer.readUInt16LE(26) & 0x3fff, buffer.readUInt16LE(28) & 0x3fff);
  }
  if (chunkType === "VP8L" && buffer.length >= 25 && buffer[20] === 0x2f) {
    const bits = buffer.readUInt32LE(21);
    return positiveDimensions((bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1);
  }
  return undefined;
}

function getImageDimensions(buffer: Buffer, extension: string): ImageDimensions | undefined {
  if (extension === ".png" && buffer.length >= 24) {
    return positiveDimensions(buffer.readUInt32BE(16), buffer.readUInt32BE(20));
  }
  if (extension === ".jpg" || extension === ".jpeg") return getJpegDimensions(buffer);
  if (extension === ".webp") return getWebpDimensions(buffer);
  return undefined;
}

function isMissingFile(error: unknown): boolean {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT";
}

async function readCaptions(filePath: string): Promise<Record<string, GalleryCaption>> {
  try {
    const parsed: unknown = JSON.parse(await readFile(filePath, "utf8"));
    return parsed !== null && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed as Record<string, GalleryCaption>
      : {};
  } catch (error) {
    if (isMissingFile(error)) return {};
    throw error;
  }
}

export async function getProjectGallery(projectSlug: string): Promise<ProjectGalleryItem[]> {
  if (!(projectSlug in galleryProjects)) return [];
  const project = galleryProjects[projectSlug as keyof typeof galleryProjects];
  const galleryDirectory = path.join(process.cwd(), "public", "images", project.folder, "gallery");
  let filenames: string[];

  try {
    filenames = await readdir(galleryDirectory);
  } catch (error) {
    if (isMissingFile(error)) return [];
    throw error;
  }

  const pattern = new RegExp(`^${project.prefix}-gallery-(\\d+)\\.(jpg|jpeg|png|webp)$`, "i");
  const imageFiles = filenames.flatMap((filename) => {
    const match = pattern.exec(filename);
    return match ? [{ filename, number: Number(match[1]), numberLabel: match[1] }] : [];
  }).filter((file) => projectSlug !== "outdoor-recreation-victoria"
    || (file.number !== 1 && file.number !== 2)
    || path.extname(file.filename).toLowerCase() === ".png"
  ).filter((file) => projectSlug !== "local-councils-sa"
    || file.number !== 2
    || path.extname(file.filename).toLowerCase() === ".png"
  ).sort((left, right) => left.number - right.number || left.filename.localeCompare(right.filename));

  const preferWebp = projectSlug === "penrith-city-council" || projectSlug === "agriculture-victoria" || projectSlug === "business-victoria" || projectSlug === "outdoor-recreation-victoria" || projectSlug === "local-councils-sa";
  const selectedFiles = preferWebp
    ? [...new Set(imageFiles.map((file) => file.number))].map((number) => {
      const versions = imageFiles.filter((file) => file.number === number);
      return versions.find((file) => path.extname(file.filename).toLowerCase() === ".webp") ?? versions[0];
    })
    : imageFiles;
  const captions = await readCaptions(path.join(galleryDirectory, "captions.json"));
  const items: ProjectGalleryItem[] = [];

  for (const file of selectedFiles) {
    const extension = path.extname(file.filename).toLowerCase();
    const buffer = await readFile(path.join(galleryDirectory, file.filename));
    const dimensions = getImageDimensions(buffer, extension);
    if (!dimensions) continue;

    const caption = captions[file.filename] ?? (preferWebp && extension === ".webp"
      ? captions[`${path.basename(file.filename, path.extname(file.filename))}.png`]
      : undefined);
    const fallbackTitle = `${project.label} gallery image ${file.numberLabel.padStart(2, "0")}`;
    const title = typeof caption?.title === "string" && caption.title.trim() ? caption.title : fallbackTitle;
    const description = typeof caption?.description === "string" ? caption.description : "";

    items.push({
      src: `/images/${project.folder}/gallery/${file.filename}`,
      alt: title,
      width: dimensions.width,
      height: dimensions.height,
      title,
      description,
    });
  }

  return items;
}