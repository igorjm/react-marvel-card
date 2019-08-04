import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9998;
`;

const Component = ({ children, style, show, ...rest }) =>
  show && <Backdrop {...rest}>{children}</Backdrop>;

Component.propTypes = {
  show: PropTypes.bool,
};

export default Component;
