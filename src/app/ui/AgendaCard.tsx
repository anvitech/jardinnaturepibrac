
interface ConferenceSpeaker {
  name: string,
  title: string,
  from: string,
  note: string,
}

interface AgendaCardProps {
  conference_location: string,
  conference_date: string,
  conference_type: string,
  conference_title: string,
  conference_speaker: ConferenceSpeaker
}

export default function AgendaCard({
  conference_location,
  conference_date,
  conference_type,
  conference_title,
  conference_speaker
} : Readonly<AgendaCardProps>) {

  return (
    <div className="p-4 ring shadow-xl/30 rounded-lg text-center">
      <p className="text-[12px]/[16px] italic">{conference_location}</p>
      <h3 className="text-green-600">{conference_date}</h3>
      <p className="italic text-[12px]/[16px]">{conference_type}</p>

      <h2 className="text-red-600 font-semibold my-6">{conference_title}</h2>
      <div className="italic text-[14px]/[20px]">
        <p>{conference_speaker.name}</p>
        <p>{conference_speaker.title}</p>
        <p>{conference_speaker.from}</p>
        <p>{conference_speaker.note}</p>
      </div>
    </div>
  )
}