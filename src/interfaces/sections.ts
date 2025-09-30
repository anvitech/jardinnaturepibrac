interface ConferenceSpeaker {
  name: string;
  title: string;
  from: string;
  note: string;
}

export interface ConferenceAgendaProps {
  category: string;
  location: string;
  date: string;
  type: string;
  title: string;
  speaker: ConferenceSpeaker
}

export interface SectionsType {
  sections: {
    current_season: {
      cards: ConferenceAgendaProps[]
    }
  }
}

export interface PageType {
  title: string;
  description: string;
  sections: {key: string, value: string}
}
