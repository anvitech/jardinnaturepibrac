"use client";

import {useTranslations} from 'next-intl';
import ButtonImage from '../ButtonImage';
import GoogleMapCard from '../GoogleMapCard';

export default function NextConferenceSection() {
  const t = useTranslations('Agenda');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="next_conference" className="py-8 px-4 w-full text-center mb-8">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('next_conference.title')}</h1>
      <ButtonImage
        href="https://jardinnaturepibrac.org/Service%20Civique.htm"
        src={`${basePath}/images/agenda/next_conference.jpg`}
        alt='Next conference'
        width={800}
      />
      <p className='my-4 mx-4 text-justify text-wrap text-[12px]/[16px]'>{t('next_conference.description')}</p>
      <div id="agenda-access" className="mt-8 flex flex-col gap-4 justify-center items-center">
        <a
          href="https://meet.goto.com/jardinaturepibrac/pesticides"
          className="inline-block bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800 transition-colors mb-8"
        >
          {t('next_conference.visio_link')}
        </a>
        <GoogleMapCard />
      </div>
    </section>
  )
}
