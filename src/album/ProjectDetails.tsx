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
  SiApplemusic as AppleMusic,
  SiBandcamp as Bandcamp,
  SiSoundcloud as Soundcloud,
  SiSpotify as Spotify,
  SiTidal as Tidal,
} from "react-icons/si";
import { MdClose as Close } from "react-icons/md";
import React, { ReactElement, useMemo, useState } from "react";
import { getServiceLabel, Project } from "./Project";
import { sendAnalyticsEvent } from "../sendAnalyticsEvent";

const MusicServices = ({ album }: { album: Project }) => {
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
            <Box pad={"small"}>
              <Button
                hoverIndicator
                icon={<Box pad={"small"}>{icon}</Box>}
                key={service}
                justify={"start"}
                label={<Text size={"medium"}>{serviceLabel}</Text>}
                onClick={() => {
                  sendAnalyticsEvent({
                    title: `${album.title} - ${serviceLabel}`,
                    path: album.links[service],
                  });
                  window.open(album.links[service]);
                }}
              />
            </Box>
          );
        }
      })
      .filter((value) => value);
  }, []);

  return (
    <Box direction="column" fill justify="between" wrap={true}>
      {musicServices}
    </Box>
  );
};

export const ProjectDetails = ({
  album,
  onClose,
}: {
  album: Project;
  onClose: () => void;
}) => {
  const [showProjectDescription, setShowProjectDescription] = useState(false);
  const buttonLabel = `${
    showProjectDescription ? "Less" : "More"
  } about this project`;
  return (
    <ThemeContext.Extend
      value={{
        global: {
          colors: {
            brand: album.colors.text,
            "accent-1": album.colors.text,
            background: album.colors.background,
          },
        },
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
          <Heading>Listen to {album.title}</Heading>
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
          <Box flex={{ grow: 1, shrink: 0 }}>
            <MusicServices album={album} />
          </Box>
          <Box height={"8px"} />
          <Box pad={{ vertical: "medium" }}>
            <Button
              primary
              label={buttonLabel}
              onClick={() => setShowProjectDescription(!showProjectDescription)}
            />
            {showProjectDescription && (
              <>
                <Box pad={{ vertical: "small" }}>
                  <Text size={"medium"} style={{ whiteSpace: "pre-line" }}>
                    {album.long_description}
                  </Text>
                </Box>
                <Box height={"8px"} />
              </>
            )}
          </Box>
        </CardBody>
      </Card>
    </ThemeContext.Extend>
  );
};
