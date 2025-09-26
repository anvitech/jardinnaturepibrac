import { use } from 'react';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from '@/app/ui/PageLayout';
import NextConferenceSection from '@/app/ui/sections/NextConferenceSection';
import CurrentSeasonSection from '@/app/ui/sections/CurrentSeasonSection';

export default function AgendaPage({params}: Readonly<PageProps<'/[locale]'>>) {
  const {locale} = use(params);
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <NextConferenceSection />
      <CurrentSeasonSection />
    </PageLayout>
  );
}