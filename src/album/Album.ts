import { escape, replace, startCase, toLower } from "lodash-es";

export interface Album {
  title: string;
  short_description: string;
  long_description: string;
  image: string;
  colors: {
    background: string;
    text: string;
  };
  links: {
    spotify?: string;
    apple_music?: string;
    soundcloud?: string;
    bandcamp?: string;
    tidal?: string;
  };
}

export const getServiceLabel = (id: keyof Album["links"]): string => {
  switch (id) {
    case "soundcloud":
      return "SoundCloud";
    default:
      return startCase(toLower(id));
  }
};

export const getId = (album: Album): string => {
  return escape(replace(album.title.toLowerCase(), /\s/g, "-"));
};
