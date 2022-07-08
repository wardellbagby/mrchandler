import React from "react";
import { Box, Grommet, Main, ThemeType } from "grommet";
import { SiteHeader } from "./header/SiteHeader";
import { LargeAlbumList } from "./album/LargeAlbumList";

const theme: ThemeType = {
  global: {
    colors: {
      brand: "#5d4037",
      background: "#c9ad7f",
      "accent-1": "#ffffff",
    },
    font: {
      size: "14px",
      height: "20px",
    },
  },
};

export const App = () => {
  return (
    <Grommet theme={theme} full background="background-back" themeMode="dark">
      <Box fill>
        <SiteHeader />
        <Box direction="row" flex>
          <Main fill>
            <LargeAlbumList />
          </Main>
        </Box>
      </Box>
    </Grommet>
  );
};
