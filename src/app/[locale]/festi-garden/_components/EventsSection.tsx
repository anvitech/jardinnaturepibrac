'use client';

import { usePageData } from "@/app/hooks/use-data";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { EventsSectionType } from "@/interfaces/sections";
import GoogleMapCard from "@/app/ui/GoogleMapCard";

export default function EventsSection() {
  const t = useTranslations("festi_garden.events");
  const locale = useLocale();
  const {data, error} = usePageData("festi_jardin", locale);

  if (error) {
    return (<ErrorDataFetching />);
  }

  const sectionData = (data?.sections?.events as EventsSectionType) || {"date": "", "poster": ""};

  return (
    <section className="flex flex-col items-center text-center mb-16 mt-8">
      <h2 className="text-green-700 text-3xl font-bold mb-6">{t('title')}</h2>
      <h3 className="text-green-700 text-xl font-medium mb-6">{t('subtitle')}</h3>

      <Image
        src={sectionData.poster}
        width={210}
        height={297}
        alt="Festi'Jardin"
        className="md:w-sm"
      />

      <div className="md:w-3xl">
        <GoogleMapCard title={t('location')} />
      </div>
    </section>
  )
}