import BiodversityPathSection from '@/app/[locale]/biodiversity_path/_components/BiodiversityPathSection';
import BiodiversityDiscoverySection from '@/app/[locale]/biodiversity_path/_components/BiodiversityDiscoverySection';
import PointsOfInterestMapSection from '@/app/[locale]/biodiversity_path/_components/PointsOfInterestMapSection';
import SectionLayout from '@/app/ui/sections/SectionLayout';

export default function BiodiversityPathPage() {
  return (
    <SectionLayout>
      <BiodversityPathSection />
      <BiodiversityDiscoverySection />
      <PointsOfInterestMapSection />
    </SectionLayout>
  )
}