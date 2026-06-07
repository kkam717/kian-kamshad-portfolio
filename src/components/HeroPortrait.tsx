"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroPortrait() {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowAlternate((current) => !current)}
      aria-pressed={showAlternate}
      aria-label={
        showAlternate
          ? "Show default portrait"
          : "Show alternate portrait"
      }
      className="group relative w-full overflow-hidden bg-ivory text-left md:cursor-default"
    >
      <Image
        src="/portrait.png"
        alt="Pixel art portrait of Kian Kamshad"
        width={380}
        height={380}
        className={`pixel-art h-auto w-full object-cover transition-opacity duration-200 md:group-hover:opacity-0 ${
          showAlternate ? "max-md:opacity-0" : "max-md:opacity-100"
        }`}
        priority
      />
      <Image
        src="/portrait-hover.png"
        alt="Pixel art portrait of Kian Kamshad giving a thumbs up"
        width={380}
        height={380}
        className={`pixel-art absolute inset-0 h-full w-full object-cover transition-opacity duration-200 md:group-hover:opacity-100 ${
          showAlternate ? "max-md:opacity-100" : "max-md:opacity-0"
        }`}
      />
    </button>
  );
}
