import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  border: ${p => `${p.theme.button.appearance[p.appearance].border}`};
  color: ${p => p.theme.button.appearance[p.appearance].color};
  background-color: ${p =>
    p.theme.button.appearance[p.appearance].backgroundColor};
  padding: ${p => p.theme.button.sizes[p.size]};
  cursor: pointer;
  font-weight: 700;
  font-size: inherit;
  border-radius: 4px;
`;

Button.defaultProps = {
  appearance: 'none',
  size: 'xs',
};

Button.propTypes = {
  appearance: PropTypes.oneOf(['success', 'ghost', 'none']),
  size: PropTypes.oneOf(['xs', 'default']),
};

export default Button;
