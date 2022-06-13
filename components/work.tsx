import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const Work = () => (
  <>
    <Heading as='h2' mb={4}>
      Current 🚧
    </Heading>
    <Flex ml={4}>
      <Image boxSize='48px' src='/assets/bexa.png' mr={2} />
      <Box>
        <Heading as='h4' size='md'>
          Beamery
        </Heading>
        <Box borderLeftWidth='1px' borderLeftColor='grey.50' pl={2} mt={2}>
          <Text>
            Helping build a disruptive <strong>Talent Operating System</strong>,
            with a focus on <strong>Internal Mobility</strong>.
          </Text>
        </Box>
      </Box>
    </Flex>
  </>
);
