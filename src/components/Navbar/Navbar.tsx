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
  @media (max-width: 768px) {
    position: relative;
    min-height: 5rem;
    background-color: var(--seed-color-primary);
    img {
      display: none;
    }
  }
`;

const NavList = styled.ul`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 0;
    overflow-y: scroll;
  }
`;

const Hamburger = styled.span`
  color: white;
  font-size: 3.5rem;
  margin-left: auto;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

function Navbar({ routes }: INavbarProps) {
  const location = useLocation();
  return (
    <Nav>
      <Hamburger>&#9776;</Hamburger>
      <NavList>
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
      </NavList>
    </Nav>
  );
}

export default Navbar;
