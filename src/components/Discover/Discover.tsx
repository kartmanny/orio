import React, { useState, useEffect, useContext, useCallback } from 'react';
import * as Framer from 'framer-motion';

import Context from 'assets/context';
import { Neighborhood } from 'App';

import Map from 'components/Map';
import Dashboard from 'components/Dashboard';
import Text from 'components/Text';

import styles from 'components/Discover/discover.module.scss';

const pageVariants = {
  initial: { opacity: 0, x: '-10vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '10vw' }
};

const pageTransitions = {
  duration: 0.4
};

const DEFAULT_DASH_DATA = {
  name: 'Magnolia',
  price: '177,000',
  population: '28,000',
  overall: 'B',
  report: [
    { name: 'Home Value', score: 'B' },
    { name: 'Rent', score: 'A-' },
    { name: 'Appreciation', score: 'B' },
    { name: 'Schools', score: 'A' },
    { name: 'Population', score: 'B-' },
    { name: 'Diversity', score: 'B' },
    { name: 'Walk Score', score: 'B' }
  ],
  schools: [
    { name: 'Ballard High School', rank: 11 },
    { name: 'Center High School', rank: 15 },
    { name: 'Cleveland High School', rank: 28 },
    { name: 'Center School', rank: 14 }
  ],
  chartData: {
    barData: [40700, 79431],
    pieData: [45, 10, 10, 35],
    lineData: [
      170000,
      400000,
      440000,
      680000,
      900000,
      920000,
      1110000,
      1270000
    ],
    crimeData: [
      [559, 6275],
      [463, 2784]
    ],
    rentOwned: [69, 31]
  }
};

function Discover({ match }: any) {
  const { params } = match;
  const { data } = useContext(Context);
  const findData = useCallback(
    (neighborhoodName: string) => {
      return data.neighborhoods.find(
        neighborhood => neighborhood.name === neighborhoodName
      );
    },
    [data.neighborhoods]
  );

  const [currNeighborhood, setCurrNeighborhood] = useState(params.neighborhood);
  const [visible, setVisible] = useState(!!currNeighborhood);
  const [regionData, setRegionData] = useState<Neighborhood | undefined>(
    findData(currNeighborhood)
  );

  useEffect(() => {
    setVisible(!!currNeighborhood);
    const neighborhoodData = findData(currNeighborhood);
    setRegionData(neighborhoodData);
  }, [currNeighborhood, data.neighborhoods, findData]);

  return (
    <Framer.motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
      className={styles.discoverContainer}
    >
      <Text type="heading2">Select a region to view its details:</Text>
      <Map
        highlightedRegions={[currNeighborhood]}
        onNeighborhoodClick={neighborhood => {
          setCurrNeighborhood(neighborhood);
        }}
      />
      {
        <Dashboard
          visible={visible}
          onClose={() => {
            setCurrNeighborhood('');
            setVisible(false);
          }}
          {...DEFAULT_DASH_DATA}
          {...regionData}
        />
      }
    </Framer.motion.div>
  );
}

export default Discover;
