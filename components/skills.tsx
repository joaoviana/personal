import { Heading, TagLeftIcon, TagLabel, Tag, Grid } from '@chakra-ui/react';
import { GrGraphQl, GrReactjs } from 'react-icons/gr';
import { SiTypescript, SiStorybook, SiNextdotjs } from 'react-icons/si';
import { PlaywrightIcon } from 'components/playwright';

const skills = [
  {
    label: 'ReactJS',
    icon: GrReactjs,
  },
  {
    label: 'TypeScript',
    icon: SiTypescript,
  },
  {
    label: 'GraphQL',
    icon: GrGraphQl,
  },
  {
    label: 'NextJS',
    icon: SiNextdotjs,
  },
  {
    label: 'Storybook',
    icon: SiStorybook,
  },
  {
    label: 'Playwright',
    icon: PlaywrightIcon,
  },
];

export const Skills = () => (
  <>
    <Heading as='h3' mb={4}>
      Working with
    </Heading>
    <Grid w={['90vw', '50vw']} templateColumns='repeat(2, 1fr)' gap={3}>
      {skills.map(({ label, icon }) => (
        <Tag
          key={label}
          size='12px'
          colorScheme='gray'
          p={2}
          borderRadius='3px'
        >
          <TagLeftIcon boxSize='16px' as={icon} />
          <TagLabel color='white'>{label}</TagLabel>
        </Tag>
      ))}
    </Grid>
  </>
);
