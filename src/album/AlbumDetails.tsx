import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  ThemeContext,
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
import { Album, getServiceLabel } from "./Album";
import { sendAnalyticsEvent } from "../sendAnalyticsEvent";

const MusicServices = ({ album }: { album: Album }) => {
  const musicServices = useMemo(() => {
    return Object.keys(album.links)
      .map((service: keyof typeof album.links) => {
        const serviceLabel = getServiceLabel(service);
        let icon: ReactElement;
        if (service === "spotify") {
          icon = <Spotify size={48} aria-label={serviceLabel} />;
        }
        if (service === "apple_music") {
          icon = <AppleMusic size={48} aria-label={serviceLabel} />;
        }
        if (service === "soundcloud") {
          icon = <Soundcloud size={48} aria-label={serviceLabel} />;
        }
        if (service === "bandcamp") {
          icon = <Bandcamp size={48} aria-label={serviceLabel} />;
        }
        if (service === "tidal") {
          icon = <Tidal size={48} aria-label={serviceLabel} />;
        }

        if (icon) {
          return (
            <Button
              hoverIndicator
              icon={icon}
              size={"small"}
              tip={serviceLabel}
              key={service}
              onClick={() => {
                sendAnalyticsEvent({
                  title: `${album.title} - ${serviceLabel}`,
                  path: album.links[service],
                });
                window.open(album.links[service]);
              }}
            />
          );
        }
      })
      .filter((value) => value);
  }, []);

  return (
    <Box direction="row" fill justify="between" wrap={true}>
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
    <ThemeContext.Extend
      value={{
        tip: {
          content: {
            background: album.colors.background,
          },
        },
      }}
    >
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
            onClick={onClose}
            icon={<Close size={24} />}
          />
        </CardHeader>
        <CardBody overflow={"auto"}>
          <Text style={{ whiteSpace: "pre-line" }}>
            {album.long_description}
          </Text>
        </CardBody>
        <CardFooter pad="small" direction="column">
          <MusicServices album={album} />
        </CardFooter>
      </Card>
    </ThemeContext.Extend>
  );
};
