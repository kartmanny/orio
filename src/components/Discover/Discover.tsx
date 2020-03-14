import React, { useState, useEffect, useContext } from 'react';
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

function Discover({ match }: any) {
  const { params } = match;
  const { data } = useContext(Context);
  const [currNeighborhood, setCurrNeighborhood] = useState(params.neighborhood);
  const [visible, setVisible] = useState(!!currNeighborhood);
  const [regionData, setRegionData] = useState<Neighborhood | undefined>();

  useEffect(() => {
    setVisible(!!currNeighborhood);
    console.log(data.neighborhoods);
    const neighborhoodData = data.neighborhoods.find(
      neighborhood => neighborhood.name === currNeighborhood
    );
    setRegionData(neighborhoodData);
    console.log(neighborhoodData);
  }, [currNeighborhood, data.neighborhoods]);

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
      {regionData && (
        <Dashboard
          visible={visible}
          onClose={() => {
            setCurrNeighborhood('');
            setVisible(false);
          }}
          {...regionData}
        />
      )}
    </Framer.motion.div>
  );
}

export default Discover;
