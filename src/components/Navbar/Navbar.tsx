import React from 'react';

type Route = {
  name: string;
  path: string;
  component: any;
  exact?: boolean;
};

interface INavbarProps {
  routes: Array<Route>;
}

function Navbar({ routes }: INavbarProps) {
  return (
    <nav>
      {routes.map(route => (
        <div>{route.name}</div>
      ))}
    </nav>
  );
}

export default Navbar;
