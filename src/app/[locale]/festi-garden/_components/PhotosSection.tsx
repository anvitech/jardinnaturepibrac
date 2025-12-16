"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { ImageType } from "@/interfaces/sections";
import PhotosAccordion from "@/app/ui/PhotosAccordion";


export default function PhotosSection() {
  // Translations
  const t = useTranslations("festi_garden.photos");
  const locale = useLocale();

  // Page data fetching
  const { data, error } = usePageData("festi_jardin", locale);

  // Extract photos from data
  const photos = (data?.sections?.photos as ImageType[]) || [];

  // JSX
  return (
    <section className="my-32">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{t('title')}</h1>

      {error && <ErrorDataFetching />}

      {/* Photos content goes here */}
      {(!error && photos && photos.length > 0) && <PhotosAccordion photos={photos} />}
    </section>
  );
}