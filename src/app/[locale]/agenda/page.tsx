
import {use, Suspense} from 'react';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from '@/app/ui/PageLayout';
import NextConferenceSection from '@/app/ui/sections/NextConferenceSection';
import CurrentSeasonSection from '@/app/ui/sections/CurrentSeasonSection';
import getData from '@/app/hooks/getData';

export default function AgendaPage({params}: Readonly<PageProps<'/[locale]/agenda'>>) {
  const {locale} = use(params);
  const conference_data = getData('agenda');
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <NextConferenceSection />
        <CurrentSeasonSection sections={conference_data}/>
      </Suspense>
    </PageLayout>
  );
}