import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { Neighborhood } from 'App';

import Text from 'components/Text';
import Grade from 'components/Grade';

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
        <Grades>
          {report &&
            report.map(({ name, score }, index) => {
              if (name && score) {
                return (
                  <TextGrade key={`grade-${name}-${index}`}>
                    <Grade value={score} />
                    <span
                      style={{
                        margin: '0 auto 0 1rem',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%'
                      }}
                    >
                      <Text type="regular">{name}</Text>
                    </span>
                  </TextGrade>
                );
              }
              return null;
            })}
        </Grades>
      </div>
    </div>
  );
}

export default Dashboard;
