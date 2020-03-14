import React, { useContext } from 'react';

import Context from 'assets/context';
import { Redirect } from 'react-router-dom';

import Text from 'components/Text';

function Favorites() {
  const { data } = useContext(Context);
  console.log(data.neighborhoods);
  return data.authenticated ? (
    <Text type="heading1">Favorites Page</Text>
  ) : (
    <Redirect to="/login" />
  );
}

export default Favorites;
