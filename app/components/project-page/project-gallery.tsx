"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExternalLinkArrow } from "../external-link-arrow";
import type { ProjectGalleryItem } from "./project-page-types";

const desktopPreviewCount = 7;

export function ProjectGallery({ items }: { items: ProjectGalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => current === null ? 0 : (current - 1 + items.length) % items.length);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => current === null ? 0 : (current + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen, items.length]);

  useEffect(() => {
    if (activeIndex !== null && scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [activeIndex]);

  const openAt = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
  };

  const move = (direction: number) => {
    setActiveIndex((current) => current === null ? 0 : (current + direction + items.length) % items.length);
  };

  const handleViewerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const controls = [...(dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)") ?? [])]
      .filter((control) => control.getClientRects().length > 0);
    if (!controls.length) return;

    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
      event.preventDefault();
      first.focus();
    }
  };

  const current = activeIndex === null ? null : items[activeIndex];

  return (
    <section id="project-gallery" className="project-gallery" aria-labelledby="project-gallery-title">
      <div className="project-container project-gallery__inner">
        <header className="project-gallery__header">
          <h2 id="project-gallery-title">Project gallery</h2>
          <p>Explore the screens from the project including the workshop boards and final high-fidelity designs.</p>
        </header>
        <div className="project-gallery__grid">
          {items.slice(0, desktopPreviewCount).map((item, index) => (
            <button
              className="project-gallery__thumbnail"
              key={item.src}
              type="button"
              aria-label={`View ${item.title}`}
              onClick={(event) => openAt(index, event.currentTarget)}
            >
              <Image src={item.src} alt="" width={item.width} height={item.height} sizes="(max-width: 767px) 50vw, 25vw" />
              <span className="project-gallery__overlay" aria-hidden="true">
                <span>View image</span>
                <ExternalLinkArrow />
              </span>
            </button>
          ))}
          {items.length > desktopPreviewCount ? (
            <button
              className="project-gallery__thumbnail project-gallery__more"
              type="button"
              aria-label={`View ${items.length - desktopPreviewCount} more gallery images`}
              onClick={(event) => openAt(desktopPreviewCount, event.currentTarget)}
            >
              <span className="project-gallery__more-count"><i aria-hidden="true" />{items.length - desktopPreviewCount}</span>
            </button>
          ) : null}
        </div>
      </div>

      {current ? (
        <div
          ref={dialogRef}
          className="project-gallery-viewer"
          role="dialog"
          aria-modal="true"
          aria-label="Project gallery"
          tabIndex={-1}
          onKeyDown={handleViewerKeyDown}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div
            className="project-gallery-viewer__scroll"
            ref={scrollRef}
            onClick={(event) => {
              if (event.target === event.currentTarget || event.target === event.currentTarget.firstElementChild) setActiveIndex(null);
            }}
          >
            <div className="project-shell project-gallery-viewer__image-stage">
              <Image
                className="project-gallery-viewer__image"
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 128px), 1240px"
                priority
              />
            </div>
          </div>
          <button className="project-gallery-viewer__side-control project-gallery-viewer__side-control--previous" type="button" aria-label="Previous image" onClick={() => move(-1)}>
            <ExternalLinkArrow />
          </button>
          <button className="project-gallery-viewer__side-control project-gallery-viewer__side-control--next" type="button" aria-label="Next image" onClick={() => move(1)}>
            <ExternalLinkArrow />
          </button>
          <div className="project-gallery-viewer__toolbar">
            <button className="project-gallery-viewer__close" type="button" aria-label="Close gallery" onClick={() => setActiveIndex(null)}>
              <i aria-hidden="true" />
              <span>Close</span>
            </button>
            <div className="project-gallery-viewer__copy" aria-live="polite">
              <h3>{current.title}</h3>
              {current.description ? <p>{current.description}</p> : null}
            </div>
            <div className="project-gallery-viewer__controls">
              <button type="button" aria-label="Previous image" onClick={() => move(-1)}>
                <ExternalLinkArrow />
              </button>
              <span>{String((activeIndex ?? 0) + 1).padStart(2, "0")} / {items.length}</span>
              <button type="button" aria-label="Next image" onClick={() => move(1)}>
                <ExternalLinkArrow />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}