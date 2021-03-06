import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

const FooterWrapper = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--seed-color-primary);
`;

function Footer() {
  return (
    <FooterWrapper>
      <Text type="large" weight="body" color="white">
        2020 © Orio Inc
      </Text>
    </FooterWrapper>
  );
}
export default Footer;
