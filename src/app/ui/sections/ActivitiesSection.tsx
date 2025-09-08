import {useTranslations} from 'next-intl';
import ButtonImage from '../ButtonImage';

export default function ActivitiesSection() {
  const t = useTranslations('Activities');

  return (
    <section id="our_activities" className="py-8 px-4">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('title')}</h1>
      <h3 className="text-center text-xl text-green-700 font-bold mb-4">{t('description')}</h3>
      <div id="activities_buttons" className="mb-4 flex-col gap-4">
        {/* Buttons or links to activities can be added here */}
        <div className='flex-row justify-center gap-8 mb-4 md:flex'>
          <ButtonImage 
            href="https://jardinnaturepibrac.org/BiodiverStival.htm"
            src='/images/home/biodiverstival.jpg'
            alt='BiodiverStival event'
          />
          <ButtonImage 
            href="https://jardinnaturepibrac.org/Agenda%20Jardin%20Nature%20Pibrac.htm#Ancre1"
            src='/images/home/Conference.jpg'
            alt='Conference event'
          />
          <ButtonImage 
            href="https://jardinnaturepibrac.org/Festi%20Jardin.htm"
            src='/images/home/Festi_jardin.jpg'
            alt='Conference event'
          />
        </div>

        <div className='flex-row justify-center gap-8 mb-4 md:flex'>
          <ButtonImage 
            href="https://jardinnaturepibrac.org/Jardin%20Pedagogique.htm"
            src='/images/home/jardin_pedagogique.jpg'
            alt='Jardin pédagogique activity'
          />
          <ButtonImage 
            href="https://jardinnaturepibrac.org/Chemin.htm"
            src='/images/home/chemin_de_la_biodiversite.jpg'
            alt='Chemin de la biodiversité activity'
          />
          <ButtonImage 
            href="https://jardinnaturepibrac.org/Verger%20Conservatoire%20Pibrac.htm"
            src='/images/home/verger_conservatoire.jpg'
            alt='Jardin conservatoire activity'
          />
        </div>

        <div className='flex-row justify-center gap-8 mb-4 md:flex'>
          <ButtonImage 
            href="https://jardinnaturepibrac.org/Ilot%20Biodiversite.htm"
            src='/images/home/ilot_biodiversite.jpg'
            alt='Ilot biodiversité activity'
          />
          <ButtonImage 
            href="https://jardinnaturepibrac.org/Ruche%20Pedagogique.htm"
            src='/images/home/ruche_pedagogique.jpg'
            alt='Ruche pédagogique activity'
          />
        </div>
      </div>
    </section>
  );
}