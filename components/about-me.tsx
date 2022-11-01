import { Heading, List, ListItem, Text } from '@chakra-ui/react';

export const AboutMe = () => (
  <>
    <Heading as='h3' mb={5}>
      About Me
    </Heading>
    <Text fontWeight={600} fontSize='2xl' mb={1}>
      ❤️ Passionate about
    </Text>
    <List spacing={1} ml={7} fontSize='lg' mb={6}>
      <ListItem>Rubber-ducking with devs and designers.</ListItem>
      <ListItem>Sharing &lt;-&gt; Learning</ListItem>
    </List>
    <Text fontWeight={600} fontSize='2xl' mb={1}>
      🧐 Active on
    </Text>
    <List spacing={1} ml={7} fontSize='lg' mb={6}>
      <ListItem>Helping others get into Tech</ListItem>
      <ListItem>Web Performance improvements</ListItem>
    </List>
    <Text fontWeight={600} fontSize='2xl' mb={2}>
      🌱 Getting good at
    </Text>
    <List spacing={1} ml={7} fontSize='lg' mb={6}>
      <ListItem>Leading initiatives (Tech Stack upgrades)</ListItem>
      <ListItem>CI/CD work</ListItem>
    </List>{' '}
  </>
);
