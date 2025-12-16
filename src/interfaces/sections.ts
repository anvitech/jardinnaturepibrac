interface ConferenceSpeaker {
  name: string;
  title: string;
  from: string;
  note: string;
}

export interface ConferenceAgendaProps {
  category: string;
  location?: string;
  date: string;
  type: string;
  title: string;
  speaker?: ConferenceSpeaker
}

///////////////////////
// Page Data Types
///////////////////////

export interface PageDataType {
  sections: SectionsType
}

export interface SectionsType {
  [key: string]: {
    [key: string]:
    ConferenceAgendaProps[]
    | ArticleType[] | ImageType[]
    | IntroductionType | HeroSectionType | WorkshopPhotosSectionType
  }
  | EventsSectionType | ExhibitorsSectionType
  | ImageType[] | PartnerType[] | PosterType[]
  | IntroductionType | HeroSectionType
  | WorkshopPhotosSectionType
  | ConferenceAgendaProps[];
}

// Sections Data Types

export interface WorkshopPhotosSectionType {
  title?: string;
  description?: string[];
  photos: ImageType[];
}

export interface HeroSectionType {
  logo: ImageType;
  events: ImageType[];
}

export interface IntroductionType {
  title?: string;
  description: string[];
  image?: ImageType;
}

export interface PosterType {
  year?: string;
  image: string;
  alt: string;
}

export interface PartnerType {
  name: string;
  logo: string;
  website?: string;
}

export type ExhibitorsSectionType = {
  [key: string]: ExhibitorType[];
}

type ExhibitorType = {
  participant: string;
  specialities: string;
}

export type EventsSectionType = {
  date: string;
  poster: string;
  alt?: string;
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
  captions?: {
    src: string;
    lang: string;
    label: string;
  };
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
