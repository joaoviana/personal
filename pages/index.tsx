import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ChevronDown, Download, Mail } from 'react-feather';
import NextLink from 'next/link';
import { AnimatedText } from 'components/animated-text';
import { AboutMe } from 'components/about-me';
import { Skills } from 'components/skills';
import { Work } from 'components/work';
import { Socials } from 'components/socials';

const IndexPage: FC = () => (
  <Box p={[5, 20]}>
    <Image boxSize='100px' src='/assets/pfp.png' />
    <Heading as='h1' size='2xl' mb={10}>
      Hey ✨, I&apos;m João Viana, a{' '}
      <AnimatedText>Software Engineer </AnimatedText> based in London
    </Heading>
    <Flex mb={10}>
      <Button
        as='a'
        href='mailto:joaopadraoviana@gmail.com'
        target='_blank'
        leftIcon={<Icon as={Mail} />}
        mr={4}
        colorScheme='pink'
      >
        Say Hi
      </Button>
      <Menu>
        <MenuButton
          leftIcon={<Icon as={Download} />}
          colorScheme='green'
          as={Button}
          rightIcon={<ChevronDown />}
        >
          CV
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href='https://github.com/Joaoviana/musical-garbanzo/raw/main/public/assets/joao-viana-cv.pdf'>
              Download
            </Link>
          </MenuItem>
          <MenuItem
            as='a'
            href='https://github.com/Joaoviana/musical-garbanzo/blob/main/public/assets/joao-viana-cv.pdf'
            target='_blank'
          >
            Go to link
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
    <Flex bgColor='red' justifyContent='center' m={4}>
      <NextLink href='/blog'>Blog (coming soon)</NextLink>
    </Flex>
    <Flex mb={10}>
      <Socials />
    </Flex>
    <Box mb={10}>
      <Work />
    </Box>
    <Box mb={12}>
      <Skills />
    </Box>
    <Box>
      <AboutMe />
    </Box>
  </Box>
);

export default IndexPage;
