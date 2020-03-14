import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { Neighborhood } from 'App';

import Text from 'components/Text';
import Grade from 'components/Grade';
import GradeReport from 'components/Dashboard/GradeReport';
import DashboardSection from 'components/Dashboard/DashboardSection';

import Residents from 'components/Dashboard/Residents';
import Homes from 'components/Dashboard/Homes';

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
  onClose,
  visible,
  name,
  overall,
  report,
  chartData
}: IDashboardProps) {
  let barData: number[] | undefined;
  let pieData: number[] | undefined;
  let lineData: number[] | undefined;
  let rentOwned: number[] | undefined;
  if ('barData' in chartData && 'pieData' in chartData) {
    barData = chartData.barData;
    pieData = chartData.pieData;
  }
  if ('lineData' in chartData && 'rentOwned' in chartData) {
    lineData = chartData.lineData;
    rentOwned = chartData.rentOwned;
  }
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
          <Text type="heading3">Overall Orïo Score:</Text>
          {overall && <Grade value={overall} />}
        </TextGrade>
        <GradeReport report={report} />
        <DashboardSection name="About the Residents">
          <Residents barData={barData} pieData={pieData} />
        </DashboardSection>
        <DashboardSection name="About the Homes">
          <Homes lineData={lineData} rentOwned={rentOwned} />
        </DashboardSection>
      </div>
    </div>
  );
}

export default Dashboard;
