# After create-react-app

### src config

- [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)

```ts
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

# css - [Material-UI](https://material-ui.com/getting-started/installation/)

### Step 1 : Install

```sh
yarn add @material-ui/core
```

### Step 2 : Connect css to create-react-app

```ts
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

// css - material-ui
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'config/Materialui';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

# Layout

### Step 1 : Create Layout

```ts
// components/Layout.js
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
      s<main>{children}</main>
      <ProTip />
      <Copyright />
    </Container>
  );
};

export default Layout;
```

### Step 2 : Connect Layout to App

```ts
// App.js
import React from 'react';
import Layout from 'components/Layout';

function App() {
  return (
    <Layout>
      <h1>hello world</h1>
    </Layout>
  );
}

export default App;
```

# [Apollo-CLient v3.0 beta](https://www.apollographql.com/docs/react/v3.0-beta/get-started/)

### Step 1 : Installation

```sh
yarn add @apollo/client
```

### Step 2 :Create a client

```ts
// config/Apollo.js
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
});

export default client;
```

### Step 3 :Connect your client to create-react-app

```ts
// index.js
...

import { ApolloProvider } from '@apollo/client';
import client from 'config/Apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    ...
  </ApolloProvider>,
  document.getElementById('root')
);
```

- issue

```sh
./node_modules/graphql-tag/src/index.js
Module not found: Can't resolve 'graphql/language/parser'
```

- solve

```sh
npm i --save grpahql
```

# Route-based code splitting

```sh
yarn add react-router-dom
```

```ts
// config/Router.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Detail = lazy(() => import('routes/Detail'));
const Home = lazy(() => import('routes/Home'));

const Router = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...?</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={Detail} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Router;
```
