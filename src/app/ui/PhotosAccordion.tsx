
import { useState } from "react";

import Image from "next/image";

import IconButton from "./IconButton";
import { ImageType } from "@/interfaces/sections";


export default function PhotosAccordion({ photos, withCaption }: Readonly<{ photos: ImageType[], withCaption?: boolean }>) {

  // Component states
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const fadeDuration = 700;

  // Handlers
  const handlePrevPhotoClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentPhotoIndex((currentPhotoIndex) => (currentPhotoIndex - 1 + photos.length) % photos.length);

      // Immediately set isFading back to false
      setIsFading(false);
    }, fadeDuration);
  };

  const handleNextPhotoClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentPhotoIndex((currentPhotoIndex) => (currentPhotoIndex + 1) % photos.length);

      // Immediately set isFading back to false
      setIsFading(false);
    }, fadeDuration);
  };

  // Get base path for images
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // JSX
  return (
    <div className="flex gap-4 justify-center">
      <IconButton icon="arrow-left" onClick={handlePrevPhotoClick} />
      <div
        className={`
          flex flex-col gap-2 justify-stretch
          transition-opacity ease-in-out duration-${fadeDuration} delay-50
          ${isFading ? 'opacity-10' : 'opacity-100'}
        `}
      >
        <Image
          src={basePath + photos[currentPhotoIndex].src}
          alt={photos[currentPhotoIndex].alt}
          width={800}
          height={400}
          className={`
            grow
            border-1 border-gray-600 rounded-lg
          `}
        />
        {withCaption &&
        <p
          className={`
            text-center mt-2 text-sm text-gray-600
          `}
        >
          {photos[currentPhotoIndex].alt}
        </p>}
      </div>
      <IconButton icon="arrow-right" onClick={handleNextPhotoClick}/>
    </div>
  );
}