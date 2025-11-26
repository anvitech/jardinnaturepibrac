'use client';

import { usePageData } from "@/app/hooks/use-data";
import { useLocale, useTranslations } from "next-intl";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { EventsSectionType } from "@/interfaces/sections";
import EventSection from "@/app/ui/sections/EventSection";

export default function EventsSection() {
  const t = useTranslations("festi_garden.events");
  const locale = useLocale();
  const {data, error} = usePageData("festi_jardin", locale);

  if (error) {
    return (<ErrorDataFetching />);
  }

  const sectionData = (data?.sections?.events as EventsSectionType) || {"date": "", "poster": "", "alt": ""};

  return (
    <EventSection
      title={t('title')}
      subtitle={t('subtitle')}
      poster={{
        src: sectionData.poster,
        alt: sectionData.alt || "",
        width: 210,
        height: 297,
      }}
      location={{
        title: t('location')
      }}
    />
  );
}