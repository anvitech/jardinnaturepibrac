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

export interface PageDataType {
  sections: SectionsType
}

export interface SectionsType {
  current_season: {
    cards: ConferenceAgendaProps[]
  }
}

export interface PageType {
  title: string;
  description: string;
  sections: {key: string, value: string}
}

export interface ImageType {
  name: string;
  href: string;
  src: string;
  alt: string;
}
