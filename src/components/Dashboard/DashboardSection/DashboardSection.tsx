import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

const Section = styled.section`
  margin: 1rem 0;
  text-align: left;
  display: grid;
  grid-template-rows: 5rem;
  align-items: center;
  grid-row-gap: 3rem;
`;

interface IDashboardSectionProps {
  name: string;
  children?: React.ReactNode;
}

function DashboardSection({ name, children }: IDashboardSectionProps) {
  return (
    <Section>
      <Text type="heading3">{name}</Text>
      {children && children}
    </Section>
  );
}

export default DashboardSection;
