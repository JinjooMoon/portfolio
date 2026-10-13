"use client";

import { useEffect } from "react";

function isProtectedImageTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;

  // Never affect links or interactive anchor elements
  if (target.closest("a")) return false;

  // Never affect navigation header or footer
  if (target.closest(".site-header") || target.closest(".project-footer")) return false;

  // Protect project images and lightbox images
  if (target.tagName === "IMG") {
    return Boolean(
      target.closest(".project-page") ||
      target.closest(".project-gallery") ||
      target.closest(".project-gallery-viewer")
    );
  }

  // Protect gallery thumbnail buttons and overlay surfaces
  if (target.closest(".project-gallery__thumbnail")) {
    return true;
  }

  return false;
}

export function ProjectImageProtection() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      if (isProtectedImageTarget(event.target)) {
        event.preventDefault();
      }
    };

    const handleDragStart = (event: DragEvent) => {
      if (isProtectedImageTarget(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
    };
  }, []);

  return null;
}
