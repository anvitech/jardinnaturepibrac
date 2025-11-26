'use client';
import {useTranslations} from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('title')}</h1>
      <p>{t('description')}</p>
      <p id="contact_email" className='text-blue-800 font-bold py-3'>jardin.nature.pibrac@gmail.com</p>
      <p id="notification">{t('notification')}</p>
      <p>A bientot</p>
    </section>
  )
}
