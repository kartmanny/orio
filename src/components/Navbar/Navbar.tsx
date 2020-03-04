import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Text from 'components/Text';
import styles from 'components/Navbar/navbar.module.scss';

type Route = {
  name: string;
  path: string;
  component: any;
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
  return (
    <Nav>
      {routes.map(({ path, name, exact = true }, index) => (
        <NavLink
          to={path}
          className={styles.navLink}
          activeClassName={styles.active}
          key={`NavLink-${name}-${index}`}
          exact={exact}
        >
          <Text type="large">{name}</Text>
        </NavLink>
      ))}
    </Nav>
  );
}

export default Navbar;
