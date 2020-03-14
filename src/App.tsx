import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import * as Framer from 'framer-motion';
import 'assets/styles/app.scss';

import Context from 'assets/context';
import DATA from 'assets/data/database.json';

import Favorites from 'components/Favorites';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Auth from 'components/Auth';
import Discover from 'components/Discover';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const Main = styled.div`
  padding: 8rem 0;
  margin: 0 auto auto;
`;

const pageVariants = {
  initial: { opacity: 0, x: '-10vw', scale: 1 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: '10vw', scale: 1 }
};

const pageTransitions = {
  duration: 0.4
};

export type Action = {
  type: 'ADD_FAVORITE' | 'REMOVE_FAVORITE' | 'LOGIN' | 'LOGOUT';
  payload: boolean | { favorite: string };
};

export type Neighborhood = {
  name: string;
  price?: string;
  population?: string;
  overall?: string;
  report?: {
    name?: string;
    score?: string;
  }[];
  schools?: {
    name?: string;
    rank?: number;
  }[];
  chartData?: {
    barData?: number[];
    pieData?: number[];
    lineData?: number[];
    crimeData?: number[][];
  };
  rentOwned?: number[];
};

type State = {
  authenticated: boolean;
  favorites: string[];
  neighborhoods: Neighborhood[];
};

type Reducer = (prevState: State, action: Action) => any;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (typeof action.payload === 'object' && 'favorite' in action.payload) {
        const newAdd = {
          ...state,
          favorites: Array.from(
            new Set([...state.favorites, action.payload.favorite])
          )
        };
        localStorage.setItem('initialState', JSON.stringify(newAdd));
        return newAdd;
      }
      break;
    case 'REMOVE_FAVORITE':
      if (typeof action.payload === 'object' && 'favorite' in action.payload) {
        const { favorite } = action.payload;
        const newRemove = {
          ...state,
          favorites: state.favorites.filter(fave => fave !== favorite)
        };
        localStorage.setItem('initialState', JSON.stringify(newRemove));
        return newRemove;
      }
      break;
    case 'LOGIN': {
      const loggedIn = {
        ...state,
        authenticated: true
      };
      localStorage.setItem('initialState', JSON.stringify(loggedIn));
      return loggedIn;
    }
    case 'LOGOUT': {
      const loggedOut = {
        ...state,
        authenticated: false
      };
      localStorage.setItem('initialState', JSON.stringify(loggedOut));
      return loggedOut;
    }
  }
  return state;
}

function App() {
  const initialState = localStorage.getItem('initialState');
  const initialStateObj = JSON.parse(initialState || '{}');
  const data = { ...DATA, ...initialStateObj };
  const [state, dispatch] = useReducer<Reducer, Action>(
    reducer,
    data,
    () => data
  );

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
          <Favorites />
        </Framer.motion.div>
      ),
      path: '/favorites',
      exact: true,
      render: state.authenticated
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
      render: !state.authenticated
    },
    {
      name: 'Logout',
      component: () => (
        <Framer.motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransitions}
        >
          <Auth logout={true} />
        </Framer.motion.div>
      ),
      path: '/login',
      exact: true,
      cta: true,
      render: state.authenticated
    }
  ];

  const location = useLocation();
  return (
    <Context.Provider value={{ data: state, dispatch: dispatch }}>
      <BodyWrapper>
        <Navbar routes={ROUTES} />
        <Main>
          <Framer.AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/discover/:neighborhood"
                component={Discover}
              />
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
    </Context.Provider>
  );
}

export { App };
