
import {Suspense} from 'react';
import NextConferenceSection from '@/app/ui/sections/NextConferenceSection';
import CurrentSeasonSection from '@/app/ui/sections/CurrentSeasonSection';
import SectionLayout from '@/app/ui/sections/SectionLayout';

export default function AgendaPage() {
  return (
    <SectionLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <NextConferenceSection />
        <CurrentSeasonSection />
      </Suspense>
    </SectionLayout>
  );
}