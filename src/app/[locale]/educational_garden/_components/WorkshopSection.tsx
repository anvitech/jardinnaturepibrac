"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import PhotosAccordion from "@/app/ui/PhotosAccordion";
import { WorkshopPhotosSectionType } from "@/interfaces/sections";


export default function WorkshopSection() {
  // Get translations
  const t = useTranslations("educational_garden.workshop");
  const locale = useLocale();

  // Get page data
  const { data, error } = usePageData("educational_garden", locale);
  if (error) {
    return <ErrorDataFetching />;
  }

  // Get page section data
  const workshop = data?.sections?.workshop as WorkshopPhotosSectionType || { "description": [], "photos": [] };
  const photos = workshop?.photos || [];

  // JSX
  return (
    <section>
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{t("title")}</h1>
      {photos && photos.length > 0 && <PhotosAccordion photos={photos} withCaption />}
      {workshop?.description && (
        <div className="mt-16">
          {workshop.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      )}
    </section>
  )
}