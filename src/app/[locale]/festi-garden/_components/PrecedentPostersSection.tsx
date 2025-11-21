"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { PosterType } from "@/interfaces/sections";
import Image from "next/image";

export default function PrecedentPostersSection() {
  const t = useTranslations("festi_garden.precedent_posters");
  const locale = useLocale();
  const { data, error } = usePageData("festi_jardin", locale);

  if (error) {
    return (<ErrorDataFetching />);
  }

  const posters = (data?.sections?.precedent_posters as PosterType[]) || [];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="my-32">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {posters.map((poster) => (
          <div key={poster.year} className="overflow-hidden border-gray-400 border-1 shadow-lg">
            <Image
              src={basePath + poster.image}
              alt={poster.year}
              width={210}
              height={297}
            />
          </div>
        ))}
      </div>
    </section>
  );
}