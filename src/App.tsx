import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'assets/styles/app.scss';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Text from 'components/Text';
import Footer from 'components/Footer';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  padding: 8rem 10rem;
  margin: 0 auto auto;
  width: 100%;
  max-width: 1260px;
`;

const ROUTES = [
  {
    name: 'home',
    component: Hero,
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
    <BodyWrapper>
      <BrowserRouter>
        <Navbar routes={ROUTES} />
        <Main>
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
        </Main>
        <Footer />
      </BrowserRouter>
    </BodyWrapper>
  );
}

export default App;
