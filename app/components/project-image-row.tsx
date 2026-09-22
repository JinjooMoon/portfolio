import Image from "next/image";
import type { CSSProperties } from "react";

export type ProjectImageRowVariation =
  | "single"
  | "two-equal"
  | "two-device"
  | "three"
  | "four"
  | "five";

export type ProjectImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  widthPercent?: number;
};

type ProjectImageRowProps = {
  variation: ProjectImageRowVariation;
  images: ProjectImageItem[];
  className?: string;
};

const expectedImageCounts: Record<ProjectImageRowVariation, number> = {
  single: 1,
  "two-equal": 2,
  "two-device": 2,
  three: 3,
  four: 4,
  five: 5,
};

function getVariationClass(variation: ProjectImageRowVariation) {
  return `project-image-row--${variation}`;
}

function getItemStyle(image: ProjectImageItem, variation: ProjectImageRowVariation): CSSProperties | undefined {
  if (variation !== "two-device" || !image.widthPercent) return undefined;
  return { "--gallery-item-width": `${image.widthPercent}%` } as CSSProperties;
}

export function ProjectImageRow({ variation, images, className = "" }: ProjectImageRowProps) {
  const expectedCount = expectedImageCounts[variation];
  if (images.length !== expectedCount) {
    throw new Error(`The ${variation} image row requires exactly ${expectedCount} images.`);
  }

  return (
    <div className={`project-image-row ${getVariationClass(variation)} ${className}`.trim()}>
      {images.map((image) => (
        <figure
          className="project-image-row__item"
          key={`${image.src}-${image.caption ?? image.alt}`}
          style={getItemStyle(image, variation)}
        >
          <Image
            className="project-image-row__image"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 767px) 100vw, 840px"
          />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
