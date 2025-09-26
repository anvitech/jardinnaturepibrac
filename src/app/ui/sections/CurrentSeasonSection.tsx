import {useTranslations} from 'next-intl';
import AgendaCard from '../AgendaCard';
import Image from 'next/image';
import { basePath } from '../../../../next.config';

export default function CurrentSeasonSection() {
  const t = useTranslations('Agenda');

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
        <AgendaCard 
          conference_location="Visio + Salle Polyvalente 31820 Pibrac"
          conference_date="Vendredi 26 Septembre 2025 20h30"
          conference_type="Conférence suivi d'un débat"
          conference_title="Pollution lumineuse et Faune nocturne"
          conference_speaker={{
            'name': 'Animée par Marie-Pia Marchant',
            'grade': 'Doctorante',
            'laboratory': "Laboratoire plasma et conversion d'énergie Laplace /CRBE",
            'university': "Université Paul Sabatier Toulouse III et Luc LEGAL",
            'function': "Maître de conférences, HDR, Centre de Recherche sur la Biodiversité et l'Environnement CNRS Université Paul Sabatier Toulouse III"
          }}
        />
        <AgendaCard 
          conference_location="Visio + Salle Polyvalente 31820 Pibrac"
          conference_date="Vendredi 17 Octobre 2025 20h30"
          conference_type="Conférence suivi d'un débat"
          conference_title="Arrêt des pesticides : doux rêve ou objectif réaliste ?"
          conference_speaker={{
            'name': 'Animée par Jean-Noël Aubertot',
            'grade': '',
            'laboratory': "",
            'university': "",
            'function': "Directeur de recherche équipe VASCO de l'unité AGIR INRAE Castanet Tolosan"
          }}
        />
        <AgendaCard 
          conference_location="Esplanade Sainte Germaine 31820 Pibrac"
          conference_date="Dimanche 9 Novembre 2025 9h-18h"
          conference_type="Conférence suivi d'un débat"
          conference_title="Festi'Jardin Nature et Plantes 11è édition"
          conference_speaker={{
            'name': '75+ exposants',
            'grade': '',
            'laboratory': "Pépinièristes, Horticulteurs, Artisans",
            'university': "Associations de défense de la Biodiversité Animations enfants",
            'function': "Entrée gratuite"
          }}
        />
      </div>
    </section>
  )
}
