import { Box, Card, Heading, Image, Paragraph, Stack, Text } from "grommet";
import React from "react";
import { Project } from "./Project";
import { sendAnalyticsEvent } from "../sendAnalyticsEvent";
import { MdChevronRight } from "react-icons/all";

export interface ProjectListItemProps {
  isLatest: boolean;
  album: Project;
  onClick?: () => void;
}

export const ProjectListItem = ({
  album,
  onClick,
  isLatest,
}: ProjectListItemProps) => {
  return (
    <Card>
      <Box
        align="center"
        background={album.colors.background}
        onClick={() => {
          sendAnalyticsEvent({
            path: `Details - ${album.title}`,
            title: album.title,
          });
          onClick();
        }}
      >
        <Box width={"100%"} height={"auto"} direction={"row"}>
          <ProjectImage image={album.image} />
          <Box
            flex={{ grow: 0, shrink: 2 }}
            basis={"24px"}
            style={{ zIndex: -9 }}
          />
          <Box direction={"column"} flex={{ grow: 1, shrink: 1 }}>
            <ProjectTitle
              color={album.colors.text}
              title={album.title}
              showLatestBanner={isLatest}
            />
            <Paragraph color={album.colors.text} size="large">
              {album.short_description}
            </Paragraph>
          </Box>
          <Box justify={"center"} pad={"xxsmall"} flex={{ grow: 0, shrink: 0 }}>
            <MdChevronRight
              size={48}
              color={album.colors.text}
              style={{ flex: "0 0 auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const ProjectTitle = (props: {
  color: string;
  title: string;
  showLatestBanner: boolean;
}) => {
  return (
    <Box direction={"row"} wrap gap={"medium"}>
      <Heading color={props.color}>{props.title}</Heading>
      {props.showLatestBanner && <LatestBanner />}
    </Box>
  );
};

const ProjectImage = (props: { image: string }) => {
  return (
    <Box justify={"center"} basis={"200px"} flex={{ grow: 0, shrink: 1 }}>
      <Stack anchor={"top-left"}>
        <Image height={"auto"} width={"100%"} fit="cover" src={props.image} />
      </Stack>
    </Box>
  );
};

const LatestBanner = () => {
  return (
    <Box justify={"center"}>
      <Box
        background={"status-ok"}
        pad={"8px"}
        style={{
          borderRadius: "16px",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>New</Text>
      </Box>
    </Box>
  );
};
