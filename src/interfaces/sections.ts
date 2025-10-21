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
  [key: string]: {
    cards: ConferenceAgendaProps[]
  } | {
    articles: ArticleType[]
  }
}

export interface ArticleType {
  name: string;
  title: string;
  content: string;
  thumbnail: ImageType;
  audio: AudioType;
  images: ImageType[];
}

interface AudioType {
  src: string;
  duration: number;
}

export interface PageType {
  title: string;
  description: string;
  sections: {key: string, value: string}
}

export interface ImageType {
  name?: string;
  href?: string;
  src: string;
  alt: string;
}
