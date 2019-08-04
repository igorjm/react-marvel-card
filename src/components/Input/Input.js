import styled from 'styled-components';

const Input = styled.input`
  padding: 12px;
  font-size: 14px;
  background-color: ${p => p.theme.colors.v3};
  color: ${p => p.theme.colors.v4};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
`;

export default Input;
