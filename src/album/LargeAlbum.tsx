import { Stack, Image, Box, Paragraph, Heading } from "grommet";
import React from "react";
import { Album } from "./Album";
import { sendAnalyticsEvent } from "../sendAnalyticsEvent";
import { MdChevronRight } from "react-icons/all";

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
            direction={"row"}
            align="center"
            width={width}
            justify={"around"}
            background={textBackground}
          >
            <Box basis={"48px"} flex={{ grow: 0, shrink: 0 }} />
            <Box
              direction={"column"}
              align={"center"}
              flex={{ grow: 1, shrink: 1 }}
            >
              <Heading
                color={album.colors.text}
                margin={"medium"}
                textAlign={"center"}
              >
                {album.title}
              </Heading>
              <Paragraph
                margin={"small"}
                style={{ fontStyle: "italic" }}
                color={album.colors.text}
                size="large"
                textAlign="center"
              >
                {album.short_description}
              </Paragraph>
            </Box>
            <MdChevronRight
              size={48}
              color={album.colors.text}
              style={{ flex: "0 0 auto" }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
