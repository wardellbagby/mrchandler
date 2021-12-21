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
          margin={{ vertical: "medium" }}
          alignSelf="start"
          hoverIndicator
          icon={<Close size={24} onClick={onClose} />}
        />
      </CardHeader>
      <CardBody overflow={"auto"}>
        <Text style={{ whiteSpace: "pre-line" }}>{aboutDescription}</Text>
      </CardBody>
      <CardFooter />
    </Card>
  );
};

const aboutDescription = `Mr. Chandler is a Midwest-born/Bay Area inspired rapper/singer who has a tendency to be more honest in his music than you might expect. While he didn't release his debut album, 7 Days Wonder, until 2015, Mr. Chandler has been creating music since 2009.

Mr. Chandler's music tends to be categorized as nerd-rap, hip-hop, and pop-rap. If you were to ask him yourself (or check the tags on his music), you'd see he sees his own music as "Undefined", which is surely a reference to his programmer background.

In 2011, he found his first measure of success in the now elusive track, No Need For Waiting, a song by a young teenager crooning to his girlfriend. Although they didn't work out, Mr. Chandler found himself a new-found love: music.

After a four year break, he returned with a 7 track album created in 7 days. Akin to a slice-of-life, 7 Days Wonder explored a single week in the then 22 year old rapper's life. The album explored concepts of depression, love, lust, and the passage of time.

Two years later, Mr. Chandler would return once again with 7 Days Later, an album inspired by his own depression. 7 Days Later is honest, raw, and full of emotion.

Now, Mr. Chandler is back with an album inspired by and dedicated his girlfriend of 5 years turned wife, Dog Days. Dog Days is an album full of love, and just might inspire you to fall in love yourself.`;
