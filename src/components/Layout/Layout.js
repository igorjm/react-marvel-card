import React from 'react';

import Navbar from '../Navbar';
import Container from '../Container';

const Layout = props => (
  <React.Fragment>
    <Navbar />
    <Container>{props.children}</Container>
  </React.Fragment>
);

export default Layout;
