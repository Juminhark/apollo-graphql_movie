import React from 'react';
// material-ui
import { Container } from '@material-ui/core';
// componenet
import Copyright from 'components/Copyright';
import ProTip from 'components/ProTip';
import NavBar from 'components/NavBar';

const Layout = ({ children }) => {
  return (
    <Container maxWidth='lg'>
      <NavBar />

      <main>{children}</main>

      <ProTip />
      <Copyright />
    </Container>
  );
};

export default Layout;
