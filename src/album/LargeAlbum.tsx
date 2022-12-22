import { Stack, Image, Box, Paragraph, Heading } from "grommet";
import React from "react";
import { Album } from "./Album";
import { sendAnalyticsEvent } from "../sendAnalyticsEvent";

export interface LargeAlbumProps {
  album: Album;
  onClick?: () => void;
}
export const LargeAlbum = ({ album, onClick }: LargeAlbumProps) => {
  const width = "min(100vw, 500px)";
  const textBackground = "rgba(0,0,0,0.25)";
  return (
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
      <Box width={width} height={width}>
        <Stack anchor="bottom">
          <Box>
            <Image height="100%" width="100%" fit="cover" src={album.image} />
          </Box>
          <Box
            direction={"column"}
            align="center"
            width={width}
            background={textBackground}
          >
            <Box align="center" width="100%">
              <Heading color={album.colors.text}>{album.title}</Heading>
            </Box>
            <Box align="center" width="100%">
              <Paragraph
                style={{ fontStyle: "italic" }}
                color={album.colors.text}
                size="large"
                textAlign="center"
              >
                {album.short_description}
              </Paragraph>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
