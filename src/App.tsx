import React from "react";
import { Box, grommet, Grommet, Main, ThemeType } from "grommet";
import { deepMerge } from "grommet/utils";
import { SiteHeader } from "./header/SiteHeader";
import { ProjectList } from "./album/ProjectList";
import "@fontsource-variable/lexend";
import "@fontsource/shadows-into-light-two/index.css";

const theme: ThemeType = deepMerge(grommet, {
  global: {
    colors: {
      background: "#212121",
      brand: "#212121",
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
    <Grommet
      theme={theme}
      full
      background="background"
      options={{ box: { cssGap: true } }}
    >
      <SiteHeader />
      <Main responsive fill={"horizontal"} align={"center"}>
        <Box width={"xlarge"}>
          <ProjectList />
        </Box>
      </Main>
    </Grommet>
  );
};
