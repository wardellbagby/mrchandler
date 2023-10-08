import React from "react";
import { Box, grommet, Grommet, Main, ThemeType } from "grommet";
import { deepMerge } from "grommet/utils";
import { SiteHeader } from "./header/SiteHeader";
import { ProjectList } from "./album/ProjectList";
import "@fontsource-variable/lexend";

const theme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#293338",
      background: "#21292d",
      "accent-1": "#ffffff",
    },
    font: {
      size: "14px",
      height: "20px",
      family: "'Lexend Variable', sans-serif",
    },
  },
  accordion: {
    border: false,
  },
});

export const App = () => {
  return (
    <Grommet theme={theme} full background="background" themeMode="auto">
      <SiteHeader />
      <Main responsive fill={"horizontal"} align={"center"}>
        <Box width={"xlarge"}>
          <ProjectList />
        </Box>
      </Main>
    </Grommet>
  );
};
