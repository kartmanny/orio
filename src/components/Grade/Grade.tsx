import React from 'react';
import styles from 'components/Grade/grade.module.scss';

import Text from 'components/Text';

const gradeConversion = {
  'A-': '#00B3A1',
  A: '#00B3A1',
  'A+': '#20DBC8',
  'B-': '#A7EBB2',
  B: '#81EA91',
  'B+': '#67E57B',
  'C-': '#FFDB5A',
  C: '#FFD12D',
  'C+': '#FFC700',
  'D-': '#FFB18A',
  D: '#FFA579',
  'D+': '#FF9356',
  'F-': '#FF5A5F',
  F: '#FF7579'
};

interface IGradeProps {
  value: string;
}

function Grade({ value }: IGradeProps) {
  return (
    <span
      className={styles.grade}
      style={{ backgroundColor: (gradeConversion as any)[value] }}
    >
      <Text type="large" weight="heading" color="white">
        {value}
      </Text>
    </span>
  );
}

export default Grade;
