import React from 'react';

import { Action } from 'App';

const Context = React.createContext({
  data: {
    favorites: [''],
    authenticated: false,
    neighborhoods: [{}]
  },
  dispatch: (action: Action) => {}
});

export default Context;
