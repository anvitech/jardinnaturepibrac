'use client';

import { useTranslations } from "next-intl";
import ButtonImage from "../ButtonImage";

export default function BiodiversityDiscoverySection() {
  const t = useTranslations('BiodiversityPath.visit');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="biodiversity_path-visit" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="flex flex-row justify-center items-end max-w-3xl mx-auto mb-6 text-lg text-gray-700">
        <div className="flex flex-col items-center">
          <caption>{t("description")}</caption>
          <ButtonImage
            href="https://jardinnaturepibrac.org/Chemin_Biodiversite.htm"
            src={`${basePath}/images/biodiversity_path/visit.jpg`}
            alt="Jardin Pibrac logo"
            className="w-auto px-6 mb-4"
          />
        </div>

        <div className="flex flex-col items-center">
          <ButtonImage
            href="https://play.google.com/store/apps/details?id=com.pibrac.jardinnature.cheminsdelabiodiversite&gl=FR"
            src={`${basePath}/images/biodiversity_path/google_play_logo.jpg`}
            alt="Google Play logo"
            className="w-auto px-6 mb-4"
          />
          <ButtonImage
            href="https://play.google.com/store/apps/details?id=com.pibrac.jardinnature.cheminsdelabiodiversite&gl=FR"
            src={`${basePath}/images/biodiversity_path/google_play_qrcode.png`}
            alt="Google Play QR Code"
            className="w-auto px-6 mb-4"
          />
        </div>

        <div className="flex flex-col items-center">
          <ButtonImage
            href="https://apps.apple.com/tr/app/nature-pibrac/id6448917968"
            src={`${basePath}/images/biodiversity_path/apple_store_logo.png`}
            alt="Apple Store logo"
            className="w-auto px-6 mb-4"
          />
          <ButtonImage
            href="https://apps.apple.com/tr/app/nature-pibrac/id6448917968"
            src={`${basePath}/images/biodiversity_path/apple_store_qrcode.png`}
            alt="Apple Store QR Code"
            className="w-auto px-6 mb-4"
          />
        </div>
      </div>
    </section>
  )
}
