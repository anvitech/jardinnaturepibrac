import {useTranslations} from 'next-intl';
import ButtonImage from '../ButtonImage';

export default function AppointmentSection() {
  const t = useTranslations('Appointment');

  return (
    <section id="next_appointment" className="py-8 px-4 w-full">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-4">{t('title')}</h1>
      <ButtonImage 
        href="https://jardinnaturepibrac.org/Agenda%20Jardin%20Nature%20Pibrac.htm#Ancre1"
        src='/images/agenda/AG2025.jpg'
        alt='See the next appointment on the calendar'
        width={800}
      />
    </section>
  )
}
