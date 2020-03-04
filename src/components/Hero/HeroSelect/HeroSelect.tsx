import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import Text from 'components/Text';

import styles from 'components/Hero/HeroSelect/heroselect.module.scss';

function HeroSelect() {
  return (
    <div className={styles.heroSelectContainer}>
      <NavLink
        to="/discover"
        className={cx(styles.sweepright, styles.heroSelectCard)}
      >
        <Text type="large" className={styles.heroSelectText}>
          Seattle
        </Text>
      </NavLink>
      <span className={cx(styles.sweepright, styles.construction)}>
        <Text
          type="large"
          className={cx(styles.heroSelectText, styles.constructionText)}
        >
          San Diego
        </Text>
      </span>
      <span className={cx(styles.sweepright, styles.construction)}>
        <Text
          type="large"
          className={cx(styles.heroSelectText, styles.constructionText)}
        >
          New York
        </Text>
      </span>
    </div>
  );
}

export default HeroSelect;
