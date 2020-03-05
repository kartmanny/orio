import React from 'react';
import * as Framer from 'framer-motion';
import Map from 'components/Map';

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
  const { neighborhood } = params;
  const isDashboardOpen = !!params.neighborhood;

  return (
    <Framer.motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
      className={styles.discoverContainer}
    >
      <Map highlightedRegions={[neighborhood]} onNeighborhoodClick={() => {}} />
      {isDashboardOpen && `OPEN: ${neighborhood}`}
    </Framer.motion.div>
  );
}

export default Discover;
