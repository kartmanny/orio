import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

import logo from 'assets/img/logo.svg';

import Text from 'components/Text';
import styles from 'components/Navbar/navbar.module.scss';

type Route = {
  name: string;
  path: string;
  component: any;
  render: boolean;
  cta?: boolean;
  exact?: boolean;
};

interface INavbarProps {
  routes: Array<Route>;
}

const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Navbar({ routes }: INavbarProps) {
  const location = useLocation();
  return (
    <Nav>
      <NavLink to="/" style={{ marginRight: 'auto' }}>
        <img src={logo} alt="logo" height={90} />
      </NavLink>
      {routes
        .filter(route => route.render)
        .map(({ path, name, cta = false, exact = true }, index) => {
          const isDiscover =
            name === 'Discover' && location.pathname.includes('discover');
          return (
            <NavLink
              to={isDiscover ? location.pathname : path}
              className={cx(
                cta ? styles.navCTA : styles.navLink,
                isDiscover &&
                  location.pathname.includes('discover') &&
                  styles.active
              )}
              activeClassName={styles.active}
              key={`NavLink-${name}-${index}`}
              exact={exact}
            >
              <Text type="large" color={cta ? 'white' : null}>
                {name}
              </Text>
            </NavLink>
          );
        })}
    </Nav>
  );
}

export default Navbar;
