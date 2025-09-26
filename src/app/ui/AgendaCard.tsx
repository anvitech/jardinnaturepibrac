
interface ConferenceSpeaker {
  name: string,
  grade: string,
  laboratory: string,
  university: string,
  function: string
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
    <div className="p-4 border-2 border-b-emerald-600 text-center">
      <p className="text-[12px]/[16px] italic">{conference_location}</p>
      <h3 className="text-green-600">{conference_date}</h3>
      <p className="italic text-[12px]/[16px]">{conference_type}</p>

      <h2 className="text-red-600 font-semibold my-6">{conference_title}</h2>
      <div className="italic text-[14px]/[20px]">
        <p>{conference_speaker.name}</p>
        <p>{conference_speaker.grade}</p>
        <p>{conference_speaker.laboratory}</p>
        <p>{conference_speaker.university}</p>
        <p>{conference_speaker.function}</p>
      </div>
    </div>
  )
}