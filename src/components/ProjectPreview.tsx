"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectPreviewProps = {
  image: NonNullable<Project["image"]>;
};

export function ProjectPreview({ image }: ProjectPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <>
      <figure className="mx-auto w-full max-w-[200px] sm:mx-0 sm:max-w-none">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Expand preview: ${image.alt}`}
          className="group/preview w-full cursor-zoom-in rounded-sm border border-gold/40 p-1.5 text-left transition-colors hover:border-gold sm:p-2"
        >
          <div className="border border-navy/20 bg-ivory p-1">
            <div className="relative flex aspect-[5/6] items-center justify-center overflow-hidden bg-ivory">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="max-h-full max-w-full object-contain transition-opacity group-hover/preview:opacity-90"
              />
            </div>
          </div>
        </button>
      </figure>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
        >
          <button
            type="button"
            aria-label="Close expanded preview"
            className="absolute inset-0 bg-navy/80 backdrop-blur-[2px]"
            onClick={close}
          />

          <div className="relative z-10 w-full max-w-4xl">
            <div className="rounded-sm border border-gold/40 bg-cream p-2 sm:p-3">
              <div className="border border-navy/20 bg-ivory p-1 sm:p-1.5">
                <div className="flex max-h-[85vh] items-center justify-center overflow-hidden bg-ivory">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto max-h-[85vh] w-auto max-w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={close}
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center border border-gold/60 bg-navy font-mono text-lg leading-none text-cream transition-colors hover:bg-navy-light sm:-top-4 sm:-right-4"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
