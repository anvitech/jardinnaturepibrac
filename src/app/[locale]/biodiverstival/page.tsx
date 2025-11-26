"use client";

import { usePageData } from "@/app/hooks/use-data";
import { useLocale, useTranslations } from "next-intl";

import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import {
  EventsSectionType,
  ConferenceAgendaProps,
  PartnerType,
  PosterType
} from "@/interfaces/sections";
import SectionLayout from "@/app/ui/sections/SectionLayout";
import EventSection from "@/app/ui/sections/EventSection";
import ProgramSection from "./_components/ProgramSection";
import PartnersSection from "@/app/ui/sections/PartnersSection";
import PostersSection from "@/app/ui/sections/PostersSection";

export default function BiodiverstivalPage() {
  const t = useTranslations("biodiverstival");
  const locale = useLocale();
  const {data, error} = usePageData("biodiverstival", locale);

  if (error) {
    return (<ErrorDataFetching />);
  }

  const eventsData = (data?.sections?.events as EventsSectionType) || {"date": "", "poster": "", "alt": ""};
  const program = (data?.sections?.program as ConferenceAgendaProps[]) || [];
  const partners = (data?.sections?.partners as PartnerType[]) || [];
  const posters = (data?.sections?.posters as PosterType[]) || [];
  const precedent_posters = (data?.sections?.precedent_posters as PosterType[]) || [];

  return (
    <SectionLayout>
      <EventSection
        title={t('events.title')}
        subtitle={t('events.subtitle')}
        poster={{
          src: eventsData.poster,
          alt: eventsData.alt || "",
          width: 1267,
          height: 896,
        }}
        className="md:w-2xl"
      />

      <ProgramSection program={program} title={t('program.title')} />
      <PartnersSection partners={partners} title={t('partners.title')} />
      <PostersSection
        posters={posters}
        title={t('posters.title')}
      />
      <PostersSection
        posters={precedent_posters}
        title={t('precedent_posters.title')}
      />
    </SectionLayout>
  )
}