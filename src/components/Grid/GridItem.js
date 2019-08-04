import styled from 'styled-components';

import { media } from '../../css';

export default styled.div`
  width: calc(100% / 2);
  padding: 10px;

  ${media.xs`
    width: calc(100% / 4);
  `};

  ${media.sm`
    width: calc(100% / 5);
  `};

  ${media.md`
    width: calc(100% / 6);
  `};
`;
