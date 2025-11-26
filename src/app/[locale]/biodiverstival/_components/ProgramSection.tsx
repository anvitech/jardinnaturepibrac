import { ConferenceAgendaProps } from "@/interfaces/sections";
import AgendaCard from "@/app/ui/AgendaCard";

export default function ProgramSection({ program, title }: Readonly<{ program: ConferenceAgendaProps[], title: string }>) {
  return (
    <div className="my-32">
      <h1 className="text-green-700 text-3xl font-bold mb-6 text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
        {program.map((conference) => (
          <AgendaCard
            key={conference.date}
            conference_title={conference.title}
            conference_date={conference.date}
            conference_location={conference.location || undefined}
            conference_type={conference.type}
          />
        ))}
      </div>
    </div>
  )
}