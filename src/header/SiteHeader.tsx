import { Header, Box, Heading, Nav, Button, Layer } from "grommet";
import { SiTwitter as Twitter } from "react-icons/si";
import { MdInfo as AboutIcon } from "react-icons/md";
import React from "react";
import { useState } from "react";
import { About } from "./About";

export const SiteHeader = () => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <Header background={"brand"} pad={"small"}>
        <Box
          direction="row"
          alignSelf="center"
          align="center"
          fill
          pad={{ horizontal: "xlarge" }}
        >
          <Heading level={4} margin={"none"}>
            MR. CHANDLER
          </Heading>
          <Box flex="grow" />
          <Nav direction="row">
            <Button
              hoverIndicator
              icon={<AboutIcon size={24} />}
              onClick={() => setShowAbout(true)}
            />
            <Button
              hoverIndicator
              icon={<Twitter size={24} />}
              onClick={() => window.open("https://twitter.com/mrchandlerraps")}
            />
          </Nav>
        </Box>
      </Header>
      {showAbout && (
        <Layer
          onEsc={() => setShowAbout(false)}
          onClickOutside={() => setShowAbout(false)}
          background={"#00000000"}
          responsive={false}
        >
          <Box fill alignContent="center">
            <About onClose={() => setShowAbout(false)} />
          </Box>
        </Layer>
      )}
    </>
  );
};
