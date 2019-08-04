import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import Container from '../Container';

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 55px;
  margin-bottom: 16px;
  background-image: ${p => `linear-gradient(to right, #FF0000, #B22222)`};
  color: ${p => p.theme.colors.v1};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: ${p => p.theme.colors.v3};
`;

const Navbar = props => (
  <Nav>
    <Container>
      <Logo to="/">Marvel Heroes</Logo>
    </Container>
  </Nav>
);

export default Navbar;
