import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import styled from 'styled-components/macro';
import { FC } from 'react';
import { Download, GitHub, Linkedin, Mail } from 'react-feather';

const AnimatedText = styled(Text)`
  color: #83cdff;
  animation: example 20s infinite alternate;
  @keyframes example {
    33% {
      color: #ff42c6;
    }
    66% {
      color: #4476ff;
    }
    100% {
      color: #ff93fa;
    }
  }
`;

const IndexPage: FC = () => (
  <Box p={[5, 20]}>
    <Image boxSize='100px' src='/assets/pfp.png' />
    <Heading as='h1' size='2xl' mb={10}>
      Hey ✨, I&apos;m João Viana, a{' '}
      <AnimatedText>Software Engineer </AnimatedText> based in London
    </Heading>
    <Flex mb={10}>
      <Button leftIcon={<Icon as={Mail} />} mr={4} colorScheme='pink'>
        Say Hi
      </Button>
      <Button leftIcon={<Icon as={Download} />} colorScheme='green'>
        CV
      </Button>
    </Flex>
    <Flex mb={10}>
      <IconButton
        variant='outline'
        aria-label='Github icon button'
        icon={<Icon as={GitHub} fill='white' />}
        size='lg'
        mr={2}
      />
      <IconButton
        variant='outline'
        aria-label='Linkedin icon button'
        icon={<Icon as={Linkedin} fill='white' />}
        size='lg'
      />
    </Flex>

    <Box mb={10}>
      <Heading as='h2' mb={4}>
        Current
      </Heading>
      <Flex ml={4}>
        <Image boxSize='48px' src='/assets/bexa.png' mr={2} />
        <Box>
          <Heading as='h4' size='md'>
            Beamery
          </Heading>
          <Box borderLeftWidth='1px' borderLeftColor='grey.50' pl={2} mt={2}>
            <Text>
              Helping build a disruptive{' '}
              <strong>Talent Operating System</strong>, with a focus on{' '}
              <strong>Internal Mobility</strong>.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
    <Box mb={10}>
      <Heading as='h3' mb={4}>
        Working with
      </Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {[
          'ReactJS',
          'TypeScript',
          'GraphQL',
          'NextJS',
          'Storybook',
          'Playwright',
        ].map((skill) => (
          <Button key={skill} color='white' size='sm'>
            {skill}
          </Button>
        ))}
      </Grid>
    </Box>
    <Box>
      <Heading as='h3' mb={4}>
        About Me
      </Heading>

      <Text fontWeight={600} mb={1}>
        ❤️ Passionate about
      </Text>
      <List spacing={1} ml={6} fontSize='sm' mb={4}>
        <ListItem>Rubber-ducking with devs and designers.</ListItem>
        <ListItem>Sharing &lt;-&gt; Learning</ListItem>
      </List>
      <Text fontWeight={600} mb={1}>
        🧐 Active on
      </Text>
      <List spacing={1} ml={6} fontSize='sm' mb={4}>
        <ListItem>Helping others get into Tech</ListItem>
        <ListItem>A11y standards</ListItem>
      </List>
      <Text fontWeight={600} mb={2}>
        🌱 Getting good at
      </Text>
      <List spacing={1} ml={6} fontSize='sm' mb={4}>
        <ListItem>E2E Automation Testing</ListItem>
        <ListItem>More DevOps-y stuff</ListItem>
      </List>
    </Box>
  </Box>
);

export default IndexPage;
