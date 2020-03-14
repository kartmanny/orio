import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

const Section = styled.section`
  margin: 1rem 0;
  text-align: left;
  display: flex;
  flex-direction: column;
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
