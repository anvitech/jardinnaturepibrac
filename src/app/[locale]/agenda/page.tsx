
import {Suspense} from 'react';
import NextConferenceSection from '@/app/ui/sections/NextConferenceSection';
import CurrentSeasonSection from '@/app/ui/sections/CurrentSeasonSection';

export default function AgendaPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextConferenceSection />
      <CurrentSeasonSection />
    </Suspense>
  );
}