import React, { useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import Context from 'assets/context';

import Text from 'components/Text';
import Map from 'components/Map';

const FavoritesWrapper = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  justify-items: center;
  grid-row-gap: 1rem;
`;

function Favorites() {
  const { data } = useContext(Context);
  return data.authenticated ? (
    <FavoritesWrapper>
      <Text type="heading1">Favorites</Text>
      <Map
        hoverable={false}
        highlightedRegions={data.favorites}
        onNeighborhoodClick={() => {}}
      />
    </FavoritesWrapper>
  ) : (
    <Redirect to="/login" />
  );
}

export default Favorites;
