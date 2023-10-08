import { Box, Button, Header, Heading, Layer, Nav, Text } from "grommet";
import { SiInstagram as Instagram } from "react-icons/si";
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
          wrap
          gap="12px"
          pad={{ horizontal: "large", vertical: "medium" }}
        >
          <Box direction={"column"}>
            <Heading
              level={1}
              margin={"none"}
              style={{
                fontFamily: '"Shadows Into Light Two", sans-serif',
              }}
            >
              Mr. Chandler
            </Heading>
            <Box pad={{ vertical: "xsmall" }}>
              <Text style={{ fontStyle: "italic" }}>{subtitle}</Text>
            </Box>
          </Box>
          <Box flex="grow" basis={"8px"} />
          <Nav direction="row">
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
              icon={<Instagram size={24} />}
              label={"Instagram"}
              onClick={() => {
                const url = "https://instagram.com/californiachand";
                sendAnalyticsEvent({
                  path: url,
                  title: "Instagram",
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
