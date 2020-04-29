import React from 'react';
// material-ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// componenet
import Copyright from 'components/Copyright';
import ProTip from 'components/ProTip';

const Layout = ({ children }) => {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h1' gutterBottom>
        Material Ui
      </Typography>

      <main>{children}</main>

      <ProTip />
      <Copyright />
    </Container>
  );
};

export default Layout;
