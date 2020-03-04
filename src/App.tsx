import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'assets/styles/app.scss';

import Navbar from 'components/Navbar';
import Text from 'components/Text';
import Footer from 'components/Footer';

const ROUTES = [
  {
    name: 'home',
    component: () => <Text type="heading1">Path /</Text>,
    path: '/',
    exact: true,
    render: true
  },
  {
    name: 'discover',
    component: () => <Text type="heading1">Path discover</Text>,
    path: '/discover',
    exact: true,
    render: true
  },
  {
    name: 'favorites',
    component: () => <Text type="heading1">Path favorites</Text>,
    path: '/favorites',
    exact: true,
    render: true
  },
  {
    name: 'login',
    component: () => <Text type="heading1">Path Login</Text>,
    path: '/login',
    exact: true,
    cta: true,
    render: true
  }
];

function App() {
  return (
    <BrowserRouter>
      <Navbar routes={ROUTES} />
      <Switch>
        {ROUTES.filter(route => route.render).map(
          ({ path, component, exact, name }) => (
            <Route
              path={path}
              component={component}
              exact={exact}
              key={`route-${name}`}
            />
          )
        )}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
