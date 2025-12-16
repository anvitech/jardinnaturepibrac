'use client';

import { useState, useEffect } from "react";

import Image from "next/image";
import { useLocale } from "next-intl";

import { usePageData } from "@/app/hooks/use-data";
import ErrorDataFetching from "@/app/ui/ErrorDataFetching";
import { ImageType, HeroSectionType } from "@/interfaces/sections";
import ButtonImage from "@/app/ui/ButtonImage";


/** Hero section component */
export default function HeroSection() {

  // Translations
  const locale = useLocale();

  // State to track current background image
  const [count, setCount] = useState(0);

  // Local variables
  const numberOfImages = 3;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Effect to change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
        setCount((prevCount) => (1 + prevCount) % numberOfImages);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Page data fetching
  const { data, error } = usePageData("home", locale);
  if (error) { return <ErrorDataFetching /> };
  const heroSectionData = data?.sections?.hero as HeroSectionType;
  const logo = heroSectionData?.logo;
  const events = heroSectionData?.events || [];

  // JSX
  return (
    <section
      className={`
        w-full h-dvh bg-cover bg-center bg-no-repeat bg-fixed
        text-center p-8 items-center justify-center flex flex-col`
      }
      style={{ backgroundImage: `url(images/hero/Intro${count + 1}.jpg)` }}
    >
      <div className="flex flex-col gap-8 justify-center items-center">
        {/* Logo */}
        <button className="bg-transparent border-none p-0">
          <Image
            src={basePath + (logo?.src || '#')}
            alt={logo?.alt || 'logo jardin nature pibrac'}
            className="w-96 h-96 object-contain"
            width={300}
            height={180}
          />
        </button>

        {/* Events */}
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          {events.map((event: ImageType) => (
            <ButtonImage
              key={event.alt}
              href={event.href || '#'}
              src={basePath + event.src}
              alt={event.alt}
              height={297}
              width={210}
            />
          ))}
        </div>
      </div>
    </section>
  );
}