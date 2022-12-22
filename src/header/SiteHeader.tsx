import { Header, Box, Heading, Nav, Button, Layer, Text } from "grommet";
import { SiTwitter as Twitter } from "react-icons/si";
import { MdInfo as AboutIcon } from "react-icons/md";
import React from "react";
import { About } from "./About";
import { getRandomSubtitle } from "./Subtitles";
import { Route, Routes, useNavigate } from "react-router-dom";
import { sendAnalyticsEvent } from "../sendAnalyticsEvent";

export const SiteHeader = () => {
  const subtitle = getRandomSubtitle();
  const goTo = useNavigate();
  return (
    <>
      <Header background={"brand"} pad={"xxsmall"}>
        <Box
          direction="row"
          alignSelf="center"
          align="center"
          fill
          pad={{ horizontal: "xlarge", vertical: "medium" }}
        >
          <Box direction={"column"}>
            <Heading level={3} margin={"none"}>
              Mr. Chandler
            </Heading>
            <Box pad={{ vertical: "xsmall" }}>
              <Text style={{ fontStyle: "italic" }}>{subtitle}</Text>
            </Box>
          </Box>
          <Box flex="grow" />
          <Nav direction="row-responsive">
            <Button
              hoverIndicator
              icon={<AboutIcon size={24} />}
              onClick={() => {
                sendAnalyticsEvent({
                  path: "About",
                });
                goTo("about");
              }}
              label={"About"}
            />
            <Button
              hoverIndicator
              icon={<Twitter size={24} />}
              label={"Twitter"}
              onClick={() => {
                const url = "https://twitter.com/mrchandlerraps";
                sendAnalyticsEvent({
                  path: url,
                  title: "Twitter",
                });
                window.open(url);
              }}
            />
          </Nav>
        </Box>
      </Header>
      <Routes>
        <Route
          path={"about"}
          element={
            <Layer
              onEsc={() => goTo(-1)}
              onClickOutside={() => goTo(-1)}
              background={"#00000000"}
              responsive={false}
            >
              <Box fill alignContent="center">
                <About onClose={() => goTo(-1)} />
              </Box>
            </Layer>
          }
        />
      </Routes>
    </>
  );
};
