import { escape, replace, startCase, toLower } from "lodash-es";
import { DateTime } from "luxon";

export interface Project {
  type: "ep" | "album" | "single";
  released: DateTime;
  title: string;
  short_description: string;
  long_description: string;
  image: string;
  colors: {
    background: string;
    text: "#f5f5f5" | "#212121";
  };
  links: {
    spotify?: string;
    apple_music?: string;
    soundcloud?: string;
    bandcamp?: string;
    tidal?: string;
  };
}

export const getServiceLabel = (id: keyof Project["links"]): string => {
  switch (id) {
    case "soundcloud":
      return "SoundCloud";
    default:
      return startCase(toLower(id.replace("_", " ")));
  }
};

export const getId = (album: Project): string => {
  return escape(replace(album.title.toLowerCase(), /\s/g, "-"));
};
