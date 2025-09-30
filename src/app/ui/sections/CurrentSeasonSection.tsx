import { use } from 'react';
import {useTranslations} from 'next-intl';
import AgendaCard from '../AgendaCard';
import Image from 'next/image';
import { basePath } from '../../../../next.config';
import { SectionsType } from '@/interfaces/sections';

interface CurrentSeasonSectionProps {
  readonly sections: Promise<SectionsType>;
}

export default function CurrentSeasonSection({ sections }: CurrentSeasonSectionProps) {
  const t = useTranslations('Agenda');
  const allSections = use(sections);
  const conferences = allSections.sections.current_season.cards

  return (
    <section id="current_season" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('current_season.title')}</h1>
      <Image 
        src={`${basePath}/images/agenda/current_season.jpg`} 
        alt={'Current season'} 
        className="m-auto" 
        width={100}
        height={64}
      />
      <div className='grid grid-cols-3 gap-4 justify-items-center my-8 px-32'>
        {conferences.map((conference) => (
          <AgendaCard 
            key={conference.title}
            conference_location={conference.location}
            conference_date={conference.date}
            conference_type={conference.type}
            conference_title={conference.title}
            conference_speaker={conference.speaker}
          />
        ))}
      </div>
    </section>
  )
}
