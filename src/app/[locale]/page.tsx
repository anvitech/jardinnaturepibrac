import HeroSection from '@/app/ui/hero';
import ActivitiesSection from '../ui/sections/ActivitiesSection';
import ContactSection from '../ui/sections/ContactSection';
import SponsorsSection from '../ui/sections/SponsorsSection';
import AdhesionSection from '../ui/sections/AdhesionSection';
import SectionLayout from '../ui/sections/SectionLayout';

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <SectionLayout wfull={true}>
        <ActivitiesSection />
        <AdhesionSection />
        <ContactSection />
        <SponsorsSection />
      </SectionLayout>
    </>
  );
}
