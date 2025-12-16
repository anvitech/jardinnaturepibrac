"use client";

import { useState } from "react";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { ImageType } from "@/interfaces/sections";
import IconButton from "@/app/ui/IconButton";


export default function PhotosSection() {
  // Translations
  const t = useTranslations("festi_garden.photos");
  const locale = useLocale();

  // Page data fetching
  const { data, error } = usePageData("festi_jardin", locale);

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


  // Extract photos from data
  const photos = (data?.sections?.photos as ImageType[]) || [];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


  return (
    <section className="my-32">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{t('title')}</h1>

      {error && <ErrorDataFetching />}

      {/* Photos content goes here */}
      {(!error && photos && photos.length > 0) &&
      <div className="flex gap-4 justify-center">
        <IconButton icon="arrow-left" onClick={handlePrevPhotoClick} />
        <Image
          src={basePath + photos[currentPhotoIndex].src}
          alt={photos[currentPhotoIndex].alt}
          width={576}
          height={324}
          className={`
            grow-1
            transition-opacity ease-in-out duration-${fadeDuration}
            ${isFading ? 'opacity-0' : 'opacity-100'}
            border-1 border-gray-600 rounded-lg
          `}
        />
        <IconButton icon="arrow-right" onClick={handleNextPhotoClick}/>
      </div>}
    </section>
  );
}