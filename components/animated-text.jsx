import { Text } from '@chakra-ui/react';
import styled from 'styled-components/macro';

export const AnimatedText = styled(Text)`
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