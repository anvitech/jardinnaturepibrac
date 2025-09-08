import {use} from 'react';
import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import ButtonImage from '@/app/ui/ButtonImage';

export default function AssociationPage({params}: PageProps<'/[locale]/association'>) {
  const {locale} = use(params); 

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <div id="home_sections">
      <section id="next_appointment" className="py-8 px-4 w-full">
        <h1 className="text-3xl font-bold mb-4">Partager les Savoirs</h1>
        <ButtonImage 
          href="https://jardinnaturepibrac.org/Agenda%20Jardin%20Nature%20Pibrac.htm#Ancre1"
          src='/images/agenda/AG2025.jpg'
          alt='See the next appointment on the calendar'
        />
      </section>
      <section id="our_activities" className="py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Partager les Savoirs</h1>
        <h3 className="text-3xl font-bold mb-4">pour jardiner au naturel, promouvoir l’agroécolologie et préserver la biodiversité</h3>
        <p className="mb-4">
          Welcome to the Association page. Here you can find information about our association, its mission, and activities. 
        </p>
        <p>
          This page is localized based on the selected locale: <strong>{locale}</strong>.
        </p>
      </section>
      <section id="adhesion" className="py-8 px-4">

      </section>
      <section id="contact" className="py-8 px-4">

      </section>
    </div>
  );
}
