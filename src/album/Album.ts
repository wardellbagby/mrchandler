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
