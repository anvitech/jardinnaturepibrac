
import {Suspense} from 'react';

import NextConferenceSection from '@/app/ui/sections/NextConferenceSection';
import CurrentSeasonSection from '@/app/ui/sections/CurrentSeasonSection';
import SectionLayout from '@/app/ui/sections/SectionLayout';
import ErrorDataFetching from '@/app/ui/ErrorDataFetching';


export default function AgendaPage() {
  return (
    <SectionLayout>
      <Suspense fallback={<ErrorDataFetching />}>
        <NextConferenceSection />
        <CurrentSeasonSection />
      </Suspense>
    </SectionLayout>
  );
}