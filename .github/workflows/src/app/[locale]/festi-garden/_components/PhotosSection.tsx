"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { ImageType } from "@/interfaces/sections";
import Image from "next/image";

export default function PhotosSection() {
  const t = useTranslations("festi_garden.photos");
  const locale = useLocale();
  const { data, error } = usePageData("festi_jardin", locale);

  if (error) {
    return (<ErrorDataFetching />);
  }

  const photos = (data?.sections?.photos as ImageType[]) || [];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="my-32">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{t('title')}</h1>
      {/* Photos content goes here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {photos.map((photo) => (
          <div key={photo.alt} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={basePath + photo.src}
              alt={photo.alt}
              width={576}
              height={324}
            />
          </div>
        ))}
      </div>
    </section>
  );
}