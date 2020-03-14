import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { Neighborhood } from 'App';

import Text from 'components/Text';
import Grade from 'components/Grade';
import GradeReport from 'components/Dashboard/GradeReport';

import styles from 'components/Dashboard/dashboard.module.scss';

type IDashboardProps = Neighborhood & {
  onClose: () => void;
  visible: boolean;
};

const DashboardHeader = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--seed-border-light);
  margin-bottom: 2rem;
`;

const TextGrade = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Dashboard({
  name,
  overall,
  report,
  onClose,
  visible
}: IDashboardProps) {
  return (
    <div
      className={cx(styles.dashboardBackground, visible && styles.visible)}
      onClick={onClose}
    >
      <div className={cx(styles.dashboard, visible && styles.expanded)}>
        <DashboardHeader>
          <Text type="heading2">{name}</Text>
        </DashboardHeader>
        <TextGrade>
          <Text type="large" color="heading">
            Overall Orïo Score:
          </Text>
          {overall && <Grade value={overall} />}
        </TextGrade>
        <GradeReport report={report} />
      </div>
    </div>
  );
}

export default Dashboard;
