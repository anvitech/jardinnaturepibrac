'use client';

import { useTranslations, useMessages } from "next-intl";
import Image from "next/image";

export default function BiodversityPathSection() {
  const t = useTranslations('BiodiversityPath.introduction');
  const messages = useMessages();
  const keys = Object.keys(messages.BiodiversityPath.introduction.description);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <section id="biodiversity_path-introduction" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="flex flex-row justify-center items-center w-full mx-auto mb-6 text-gray-700">
        <Image
          src={`${basePath}/images/biodiversity_path/path.jpg`}
          alt="Biodiversity Path Illustration"
          className="px-6"
          width={500}
          height={300}
        />
        <div className="grow">
          {keys.map((key) => (
            <p key={key} className="mb-4">{t(`description.${key}`)}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
