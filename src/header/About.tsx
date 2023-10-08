import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "grommet";
import { MdClose as Close } from "react-icons/md";
import React from "react";

export const About = ({ onClose }: { onClose: () => void }) => {
  return (
    <Card
      width="large"
      pad={{ horizontal: "large", bottom: "large" }}
      background="background"
    >
      <CardHeader>
        <Heading>About Mr. Chandler</Heading>
        <Box flex="grow" />
        <Button
          onClick={onClose}
          margin={{ vertical: "medium" }}
          alignSelf="start"
          hoverIndicator
          icon={<Close size={24} />}
        />
      </CardHeader>
      <CardBody overflow={"auto"}>
        <Text style={{ whiteSpace: "pre-line" }}>{aboutDescription}</Text>
      </CardBody>
      <CardFooter />
    </Card>
  );
};

const aboutDescription = `Your favorite rapper's favorite rapper's favorite rapper...maybe.

I'm just a guy who loves to make music. You'll often catch me singing and freestyling to myself if I don't realize you're paying attention. Once I do realize you're paying attention, I'm fully going to serenade you. Anywhere. Anytime. Anyplace. Unless I'll get arrested for it.

Honestly, maybe even if I'll get arrested for it.

Peep the music here on my site and hit me up on Instagram if you want to chat.`;
