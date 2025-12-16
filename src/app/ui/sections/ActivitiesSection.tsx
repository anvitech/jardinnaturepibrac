'use client';

import { useLocale, useTranslations } from 'next-intl';
import ButtonImage from '../ButtonImage';
import { ImageType } from '@/interfaces/sections';
import { usePageData } from '@/app/hooks/use-data';

export default function ActivitiesSection() {
  const t = useTranslations('Activities');

  // Get page data
  const locale = useLocale();
  const { data, error } = usePageData('home', locale);
  if (error) { return <p className="text-center">Failed to load images</p> }

  const images = (data?.sections?.activities as { images: ImageType[] })?.images ?? [];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="sharing_knowledge" className="w-full py-8 px-4 flex flex-col">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('title')}</h1>
      <h3 className="text-center text-xl text-green-700 font-bold mb-4">{t('description')}</h3>

      <div id="activities_buttons" className="mb-4 flex-col gap-4">
        {/* Buttons or links to activities can be added here */}
        <div className='flex flex-row flex-wrap justify-center gap-8 mb-4'>
          {images?.map((image: ImageType) => (
            <ButtonImage
              key={image.name}
              href={`${image.href}`}
              src={`${basePath}${image.src || '#'}`}
              alt={image.alt}
              height={297}
              width={210}
            />
          ))}
        </div>
      </div>
    </section>
  );
}