import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function GoogleMapCard() {
  return (
    <div className="w-full flex justify-center">
      <GoogleMapsEmbed
        apiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
        height={400}
        width={600}
        mode="place"
        q="Salle Polyvalente 6 boulevard des écoles, 31820 Pibrac, France"
      />
    </div>
  );
}
