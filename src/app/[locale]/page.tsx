import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/app/ui/PageLayout';
import HeroSection from '@/app/ui/hero';
import ActivitiesSection from '../ui/sections/ActivitiesSection';
import AppointmentSection from '../ui/sections/AppointmentSection';
import ContactSection from '../ui/sections/ContactSection';
import SponsorsSection from '../ui/sections/SponsorsSection';
import AdhesionSection from '../ui/sections/AdhesionSection';

export default function IndexPage({params}: Readonly<PageProps<'/[locale]'>>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <HeroSection />
      <div id="home_sections">
        <AppointmentSection />
        <ActivitiesSection />
        <AdhesionSection />
        <ContactSection />
        <SponsorsSection />
      </div>
    </PageLayout>
  );
}
