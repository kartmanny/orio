import React from 'react';
import styled from 'styled-components';

import Grade from 'components/Grade';
import Text from 'components/Text';

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

interface IGradeReportProps {
  report?: {
    name?: string;
    score?: string;
  }[];
}

function GradeReport({ report }: IGradeReportProps) {
  return (
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
                  <Text type="small">{name}</Text>
                </span>
              </TextGrade>
            );
          }
          return null;
        })}
    </Grades>
  );
}

export default GradeReport;
