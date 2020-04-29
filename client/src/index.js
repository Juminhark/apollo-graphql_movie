import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

// css - material-ui
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'config/Materialui';
import CssBaseline from '@material-ui/core/CssBaseline';

// apollo-client
import { ApolloProvider } from '@apollo/client';
import client from 'config/Apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
