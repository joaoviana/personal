import { Icon, IconButton } from '@chakra-ui/react';
import { GitHub, Linkedin, Twitter } from 'react-feather';

const socialsData = [
  {
    icon: GitHub,
    ariaLabel: 'Github icon button',
    href: 'https://github.com/joaoviana',
  },
  {
    icon: Linkedin,
    ariaLabel: 'Linkedin icon button',
    href: 'https://www.linkedin.com/in/joaopadraoviana',
  },
  {
    icon: Twitter,
    ariaLabel: 'Twitter icon button',
    href: 'https://twitter.com/joaovianacodes',
  },
];

export const Socials = () => (
  <>
    {socialsData.map(({ href, ariaLabel, icon }) => (
      <IconButton
        key={href}
        as='a'
        href={href}
        variant='outline'
        aria-label={ariaLabel}
        icon={<Icon as={icon} fill='white' />}
        size='lg'
        mr={2}
      />
    ))}
  </>
);
