import { Suspense } from "react";
import SectionLayout from "@/app/ui/sections/SectionLayout";
import EventsSection from "./_components/EventsSection";
import ExhibitorsSection from "./_components/ExhibitorsSection";
import PhotosSection from "./_components/PhotosSection";
import PartnersSection from "./_components/PartnersSection";
import PrecedentPostersSection from "./_components/PrecedentPostersSection";

export default function FestiGardenPage() {
  return (
    <SectionLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <EventsSection />
        <ExhibitorsSection />
        <PhotosSection />
        <PartnersSection />
        <PrecedentPostersSection />
      </Suspense>
    </SectionLayout>
  )
}