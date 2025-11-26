"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { ExhibitorsSectionType } from "@/interfaces/sections";

export default function ExhibitorsSection() {
  const t = useTranslations("festi_garden.exhibitors");
  const locale = useLocale();
  const { data, error } = usePageData("festi_jardin", locale);

  if (error) {
    return (<ErrorDataFetching />);
  }

  const exhibitors = (data?.sections?.exhibitors as ExhibitorsSectionType) || [];

  return (
    <section className="my-32">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{t("title")}</h1>

      <div>
        {Object.keys(exhibitors).map((exhibitor) => (
          <article key={exhibitor} className="mb-8 border-b-gray-400 border-b-2">
            <h2 key={exhibitor} className="capitalize text-green-600 font-bold mb-4">{t(`professions.${exhibitor}`)}</h2>
            {exhibitors[exhibitor].map((item, index) => (
              <div key={`${exhibitor}-${index}`} className="grid grid-cols-2 gap-4 mb-4 justify-items-start">
                <p className="font-medium">{item.participant}</p>
                <p>{item.specialities}</p>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
