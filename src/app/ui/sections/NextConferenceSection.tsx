import {useTranslations} from 'next-intl';
import ButtonImage from '../ButtonImage';

export default function NextConferenceSection() {
  const t = useTranslations('Agenda');

  return (
    <section id="next_conference" className="py-8 px-4 w-full text-center">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('next_conference.title')}</h1>
      <ButtonImage 
        href="https://jardinnaturepibrac.org/Service%20Civique.htm"
        src='/images/agenda/next_conference.jpg'
        alt='Next conference'
        width={800}
      />
      <p className='my-4 mx-32 justify-content text-wrap text-[12px]/[16px]'>{t('next_conference.description')}</p>
    </section>
  )
}
