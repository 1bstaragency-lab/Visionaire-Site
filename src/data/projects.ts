import raw from './projects-data.json';

export type MusicVideo = {
  slug: string;
  title: string;
  artist: string;
  youtubeId: string;
  url: string;
  duration: number;
  poster: string;
};

export type Commercial = {
  slug: string;
  client: string;
  title: string;
  heroFile: string;
  heroAspect: string;
  heroDuration: number;
  supportingFiles?: string[];
  instagramUrl?: string;
};

export const musicVideos = raw.musicVideos as MusicVideo[];
export const commercials = raw.commercials as Commercial[];
export const shortForm = raw.shortForm as Commercial[];
