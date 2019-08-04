import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components/macro';

// svgs
import icons from '../../svgs/icomoon/icons.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.span`
  animation: ${spin} 0.7s linear infinite;
`;

const Icon = ({ icon, ...rest }) => (
  <svg data-testid="svg-icon" {...rest}>
    <use xlinkHref={`${icons}#icon-${icon}`} />
  </svg>
);

const Component = ({ spin, ...rest }) => {
  if (spin) {
    return (
      <Rotate>
        <Icon {...rest} css="display: block;" />
      </Rotate>
    );
  }

  return <Icon {...rest} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  spin: PropTypes.bool,
};

export default Component;
