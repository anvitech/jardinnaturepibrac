import {useTranslations} from 'next-intl';
import ButtonImage from '../ButtonImage';
import {Link} from '@/i18n/navigation';

export default function AdhesionSection() {
  const t = useTranslations('Adhesion');

  return (
    <section id="adhesion" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('title')}</h1>

      <h3 className="mb-4">{t('subtitle')}</h3>
      <p className="mb-4 mx-32 justify-content text-wrap">{t('description')}</p>
      {/* <ButtonImage 
        href="#"
        src='/images/home/bulletin_adhesion_2025_2026.jpg'
        alt='See the adhesion form'
        width={700}
      /> */}
      <button className='w-2xs border-2 mb-4 bg-green-100'>
        <Link 
          href="#"
          title={t('button_title')}
          className='inline-block w-full text-[16px]/[48px]'
        >
          {t('button_title')}
        </Link>
      </button>

      <p className="mb-2">{t('note')}</p>
      <div className="text-center flex mb-4 gap-x-8 justify-center">
        <ButtonImage 
          href="https://www.helloasso.com/associations/jardin-nature-pibrac/adhesions/adhesion-de-soutien-2025-2026"
          src='/images/home/helloasso.jpg'
          alt='See HelloAsso'
          width={128}
          className="object-scale-down"
        />
        <ButtonImage 
          href="https://www.helloasso.com/associations/jardin-nature-pibrac/adhesions/adhesion-de-soutien-2025-2026"
          src='/images/home/qrcode_helloasso.png'
          alt='See HelloAsso with QRCode'
          width={128}
        />
      </div>
    </section>
  )
}
