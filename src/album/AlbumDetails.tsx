import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "grommet";
import {
  SiSpotify as Spotify,
  SiApplemusic as AppleMusic,
  SiSoundcloud as Soundcloud,
  SiBandcamp as Bandcamp,
  SiTidal as Tidal,
} from "react-icons/si";
import { MdClose as Close } from "react-icons/md";
import React, { ReactElement, useMemo } from "react";
import { Album } from "./Album";

const MusicServices = ({ album }: { album: Album }) => {
  const musicServices = useMemo(() => {
    return Object.keys(album.links)
      .map((service) => {
        let icon: ReactElement;
        if (service === "spotify") {
          icon = <Spotify size={48} />;
        }
        if (service === "apple_music") {
          icon = <AppleMusic size={48} />;
        }
        if (service === "soundcloud") {
          icon = <Soundcloud size={48} />;
        }
        if (service === "bandcamp") {
          icon = <Bandcamp size={48} />;
        }
        if (service === "tidal") {
          icon = <Tidal size={48} />;
        }

        if (icon) {
          return (
            <Button
              hoverIndicator
              icon={icon}
              key={service}
              onClick={() => window.open(album.links[service])}
            />
          );
        }
      })
      .filter((value) => value);
  }, []);

  return (
    <Box direction="row" fill justify="between">
      {musicServices}
    </Box>
  );
};

export const AlbumDetails = ({
  album,
  onClose,
}: {
  album: Album;
  onClose: () => void;
}) => {
  return (
    <Card
      width="large"
      pad={{ horizontal: "large" }}
      background={album.colors.background}
    >
      <CardHeader>
        <Heading>{album.title}</Heading>
        <Box flex="grow" />
        <Button
          margin={{ vertical: "medium" }}
          alignSelf="start"
          hoverIndicator
          icon={<Close size={24} onClick={onClose} />}
        />
      </CardHeader>
      <CardBody overflow={"auto"}>
        <Text style={{ whiteSpace: "pre-line" }}>{album.long_description}</Text>
      </CardBody>
      <CardFooter pad="small" direction="column">
        <MusicServices album={album} />
      </CardFooter>
    </Card>
  );
};
