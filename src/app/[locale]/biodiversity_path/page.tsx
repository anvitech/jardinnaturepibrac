import BiodversityPathSection from '@/app/ui/sections/BiodiversityPathSection';
import BiodiversityDiscoverySection from '@/app/ui/sections/BiodiversityDiscoverySection';
import PointsOfInterestMapSection from '@/app/ui/sections/PointsOfInterestMapSection';

export default function BiodiversityPathPage() {
  return (
    <div id="biodiversity_path-page">
      <BiodversityPathSection />
      <BiodiversityDiscoverySection />
      <PointsOfInterestMapSection />
    </div>
  )
}