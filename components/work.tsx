import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const Work = () => (
  <>
    <Heading as='h2' mb={8}>
      Work
    </Heading>
    <Flex ml={2} mb={4}>
      <Image boxSize='48px' src='/assets/asos.png' mr={2} />
      <Box>
        <Heading as='h4' size='md'>
          ASOS
        </Heading>
        <Box borderLeftWidth='1px' borderLeftColor='grey.50' pl={2} mt={2}>
          <Text mb={2}>
            Helping customers have a seamless <strong>Checkout</strong>{' '}
            experience
          </Text>
          <Text mb={2}>
            Leading the <strong>modernisation</strong> of our Tech Stack (TS for
            the win!)
          </Text>
          <Text>
            Dealing with numerous <strong>Payment</strong> providers
          </Text>
        </Box>
      </Box>
    </Flex>
    <Flex ml={2}>
      <Image boxSize='48px' src='/assets/bexa.png' mr={2} />
      <Box>
        <Heading as='h4' size='md'>
          Beamery
        </Heading>
        <Box borderLeftWidth='1px' borderLeftColor='grey.50' pl={2} mt={2}>
          <Text>
            Helped building a disruptive{' '}
            <strong>Talent Operating System</strong>, with a focus on{' '}
            <strong>Internal Mobility</strong>.
          </Text>
        </Box>
      </Box>
    </Flex>
  </>
);
