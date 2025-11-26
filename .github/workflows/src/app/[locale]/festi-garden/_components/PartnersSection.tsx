"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { PartnerType } from "@/interfaces/sections";
import Image from "next/image";

export default function PartnersSection() {
  const t = useTranslations("festi_garden.partners");
  const locale = useLocale();
  const { data, error } = usePageData("festi_jardin", locale);

  if (error) {
    return (<ErrorDataFetching />);
  }

  const partners = (data?.sections?.partners as PartnerType[]) || [];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="my-32">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="overflow-hidden border-gray-400 border-1 shadow-lg">
            <Image
              src={basePath + partner.logo}
              alt={partner.name}
              width={256}
              height={128}
              className="object-contain w-64 h-32 p-4 bg-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
}