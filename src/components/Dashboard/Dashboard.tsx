import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

import styles from 'components/Dashboard/dashboard.module.scss';

interface IDashboardProps {
  neighborhood?: string;
  showInstructions?: boolean;
}

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Grades = styled.div`
  padding: 2rem 0;
  border: 2px solid var(--seed-border-light);
  height: 200px;
  margin: 2rem 0;
  border-radius: 20px;
`;

function Dashboard({
  neighborhood,
  showInstructions = false
}: IDashboardProps) {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader>
        <Text type="heading2">{neighborhood}</Text>
        <span>A+</span>
      </DashboardHeader>
      <Grades></Grades>
    </div>
  );
}

export default Dashboard;
