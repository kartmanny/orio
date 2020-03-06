import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import Grade from 'components/Grade';

import styles from 'components/Dashboard/dashboard.module.scss';

interface IDashboardProps {
  name: string;
  price?: string;
  population?: string;
  overall: string;
  report: { name: string; score: string }[];
  schools?: { name: string; rank: number }[];
  chartData?: {
    barData: number[];
    pieData: number[];
    lineData: number[];
    crimeData: [number[]];
    rentOwned: number[];
  };
}

const DashboardHeader = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--seed-border-light);
  margin-bottom: 2rem;
`;

const Grades = styled.div`
  padding: 2rem 0;
  border: 2px solid var(--seed-border-light);
  margin: 2rem 0;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
`;

const TextGrade = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Dashboard({ name, overall, report }: IDashboardProps) {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader>
        <Text type="heading2">{name}</Text>
      </DashboardHeader>
      <div></div>
      <TextGrade>
        <Text type="large" color="heading">
          Overall Orïo Score:
        </Text>
        <Grade value={overall} />
      </TextGrade>
      <Grades>
        {report.map(({ name, score }, index) => (
          <TextGrade>
            <Grade value={score} />
            <span style={{ margin: '0 auto 0 1rem' }}>
              <Text type="regular">{name}</Text>
            </span>
          </TextGrade>
        ))}
      </Grades>
    </div>
  );
}

export default Dashboard;
