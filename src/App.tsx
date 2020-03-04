import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'assets/styles/app.scss';

import Text from 'components/Text';
import Navbar from 'components/Navbar';

const ROUTES = [
  {
    name: 'home',
    component: () => <Text type="heading1">Path /</Text>,
    path: '/',
    exact: true
  },
  {
    name: 'discover',
    component: () => <Text type="heading1">Path discover</Text>,
    path: '/discover',
    exact: true
  },
  {
    name: 'favorites',
    component: () => <Text type="heading1">Path favorites</Text>,
    path: '/favorites',
    exact: true
  }
];

function App() {
  return (
    <BrowserRouter>
      <Navbar routes={ROUTES} />
      <Switch>
        {ROUTES.map(({ path, component, exact, name }) => (
          <Route
            path={path}
            component={component}
            exact={exact}
            key={`route-${name}`}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
