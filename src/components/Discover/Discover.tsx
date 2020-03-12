import React, { useState, useEffect } from 'react';
import * as Framer from 'framer-motion';

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
  const [currNeighborhood, setCurrNeighborhood] = useState(params.neighborhood);
  const [visible, setVisible] = useState(!!currNeighborhood);

  useEffect(() => {
    setVisible(!!currNeighborhood);
  }, [currNeighborhood]);

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
      <Dashboard
        visible={visible}
        name={currNeighborhood || 'Magnolia'}
        overall={'B+'}
        onClose={() => {
          setCurrNeighborhood('');
          setVisible(false);
        }}
        report={[
          { name: 'Home Value', score: 'B' },
          { name: 'Rent', score: 'A-' },
          { name: 'Appreciation', score: 'B' },
          { name: 'Schools', score: 'A' },
          { name: 'Population', score: 'B-' },
          { name: 'Diversity', score: 'B' },
          { name: 'Walk Score', score: 'B' }
        ]}
      />
    </Framer.motion.div>
  );
}

export default Discover;
