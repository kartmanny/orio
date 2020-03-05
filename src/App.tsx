import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import * as Framer from 'framer-motion';
import 'assets/styles/app.scss';

import Text from 'components/Text';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Auth from 'components/Auth';
import Discover from 'components/Discover';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  padding: 8rem 10rem;
  margin: 0 auto auto;
  max-width: 1260px;
  width: 100vw;
`;

const pageVariants = {
  initial: { opacity: 0, x: '-10vw', scale: 1 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: '10vw', scale: 1 }
};

const pageTransitions = {
  duration: 0.4
};

const ROUTES = [
  {
    name: 'Home',
    component: () => (
      <Framer.motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <Hero />
      </Framer.motion.div>
    ),
    path: '/',
    exact: true,
    render: true
  },
  {
    name: 'Discover',
    component: Discover,
    path: '/discover',
    exact: true,
    render: true
  },
  {
    name: 'Favorites',
    component: () => (
      <Framer.motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <Text type="heading1">Path favorites</Text>
      </Framer.motion.div>
    ),
    path: '/favorites',
    exact: true,
    render: true
  },
  {
    name: 'Login',
    component: () => (
      <Framer.motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <Auth />
      </Framer.motion.div>
    ),
    path: '/login',
    exact: true,
    cta: true,
    render: true
  }
];

function App() {
  const location = useLocation();
  return (
    <BodyWrapper>
      <Navbar routes={ROUTES} />
      <Main>
        <Framer.AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/discover/:neighborhood" component={Discover} />
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
        </Framer.AnimatePresence>
      </Main>
      <Footer />
    </BodyWrapper>
  );
}

export default App;
