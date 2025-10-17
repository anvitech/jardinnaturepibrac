import HeroSection from '@/app/ui/hero';
import ActivitiesSection from '../ui/sections/ActivitiesSection';
import ContactSection from '../ui/sections/ContactSection';
import SponsorsSection from '../ui/sections/SponsorsSection';
import AdhesionSection from '../ui/sections/AdhesionSection';

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <div id="home_sections">
        <ActivitiesSection />
        <AdhesionSection />
        <ContactSection />
        <SponsorsSection />
      </div>
    </>
  );
}
