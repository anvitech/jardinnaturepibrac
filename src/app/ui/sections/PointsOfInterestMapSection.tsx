'use client';

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PointsOfInterestMapSection() {
  const t = useTranslations('BiodiversityPath.map');

  return (
    <section id="biodiversity_path-map" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="flex flex-col items-center max-w-3xl mx-auto mb-6 text-lg text-gray-700">
        <Image
          src="/images/biodiversity_path/map.jpg"
          alt="Map of the Biodiversity Path with points of interest"
          width={600}
          height={400}
        />
      </div>
    </section>
  )
}