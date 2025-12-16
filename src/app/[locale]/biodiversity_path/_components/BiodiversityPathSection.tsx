'use client';

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { IntroductionType } from "@/interfaces/sections";


export default function BiodversityPathSection() {
  const t = useTranslations('BiodiversityPath.introduction');
  const locale = useLocale();

  // Get page data
  const { data, error } = usePageData('biodiversity_path', locale);
  if (error) { return <ErrorDataFetching /> }

  // Local variables
  const introduction = data?.sections?.introduction as IntroductionType || { description: [], image: undefined };
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // JSX
  return (
    <section id="biodiversity_path-introduction" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full mx-auto mb-6 text-gray-700">
        {introduction.image && <Image
          src={`${basePath}${introduction.image.src}`}
          alt={introduction.image.alt || 'Biodiversity Path'}
          className="px-6"
          width={500}
          height={300}
        />}
        <div className="grow">
          {introduction.description.map((para, id) => (
            <p key={id} className="text-justify mb-4">{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
