import React from 'react';

import data from 'assets/data/database.json';

import { Action } from 'App';

const Context = React.createContext({
  data: {
    favorites: [''],
    authenticated: false,
    neighborhoods: data.neighborhoods
  },
  dispatch: (action: Action) => {}
});

export default Context;
