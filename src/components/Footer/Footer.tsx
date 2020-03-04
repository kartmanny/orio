import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

const FooterWrapper = styled.footer`
  padding: 1rem 2rem;
  min-height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--seed-color-primary);
`;

function Footer() {
  return (
    <FooterWrapper>
      <Text type="heading3" weight="body" color="white">
        2020 © Orio Inc
      </Text>
    </FooterWrapper>
  );
}
export default Footer;
