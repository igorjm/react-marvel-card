import React from 'react';
import styled from 'styled-components';

// components
import Portal from '../Portal';
import Container from '../Container';
import Backdrop from '../Backdrop';

// css
import { media } from '../../css';

const Wrapper = styled.div`
  position: relative;
  padding: 30px;
  background-color: ${p => p.theme.colors.v1};
  max-width: 400px;
  margin: 0 auto;
  z-index: 9999;
  border-radius: 4px;
  min-width: 100%;
  ${media.xs`
		min-width: 500px;
	`};
`;

const Modal = ({ isOpen, showModal, children, ...rest }) => (
  <Portal>
    <Backdrop show={isOpen} onClick={() => showModal(false)}>
      <Container>
        <Wrapper onClick={e => e.stopPropagation()} {...rest}>
          {children}
        </Wrapper>
      </Container>
    </Backdrop>
  </Portal>
);

export default Modal;
