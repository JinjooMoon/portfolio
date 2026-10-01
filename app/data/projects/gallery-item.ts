import type { ProjectImageItem } from "../../components/project-image-row";
import type { ProjectGalleryItem } from "../../components/project-page/project-page-types";

export function galleryItem(image: ProjectImageItem, title: string, description?: string): ProjectGalleryItem {
  return {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    title,
    description,
  };
}