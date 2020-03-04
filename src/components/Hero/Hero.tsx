import React from 'react';
import styled from 'styled-components';
import logo from 'assets/img/logo.svg';

import Text from 'components/Text';
import HeroSelect from 'components/Hero/HeroSelect';

const Title = styled.h1`
  color: var(--seed-color-primary);
  font-size: 12rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  margin-left: -2rem;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function Hero() {
  return (
    <HeroWrapper>
      <Title>
        <img src={logo} alt="logo" height={175} style={{ marginRight: -3 }} />
        Orïo
      </Title>
      <Text type="heading2" color="body" weight="body">
        Find your perfect neighborhood
      </Text>
      <HeroSelect />
    </HeroWrapper>
  );
}

export default Hero;
