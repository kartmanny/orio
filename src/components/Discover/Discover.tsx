import React from 'react';
import * as Framer from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: '-10vw', scale: 1 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: '10vw', scale: 1 }
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
    >
      {isDashboardOpen ? `OPEN: ${neighborhood}` : 'CLOSED'}
    </Framer.motion.div>
  );
}

export default Discover;
