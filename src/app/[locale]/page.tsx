import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/app/ui/PageLayout';
import HeroSection from '@/app/ui/Hero';
import ActivitiesSection from '../ui/sections/ActivitiesSection';
import AppointmentSection from '../ui/sections/AppointmentSection';
import ContactSection from '../ui/sections/ContactSection';
import SponsorsSection from '../ui/sections/SponsorsSection';

export default function IndexPage({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <PageLayout>
      <HeroSection />
      <div id="home_sections">
        <AppointmentSection />
        <ActivitiesSection />

        <section id="adhesion" className="py-8 px-4">
  
        </section>

        <ContactSection />
        <SponsorsSection />
      </div>
    </PageLayout>
  );
}
