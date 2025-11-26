import BiodversityPathSection from '@/app/ui/sections/BiodiversityPathSection';
import BiodiversityDiscoverySection from '@/app/ui/sections/BiodiversityDiscoverySection';
import PointsOfInterestMapSection from '@/app/ui/sections/PointsOfInterestMapSection';
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