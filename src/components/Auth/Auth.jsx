import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text/Text';

const AuthContainer = styled.div`
  text-align: center;
  padding: 4rem 8rem 8rem 8rem;
`;

function AuthPage() {
  return (
    <AuthContainer>
      <Text type="heading1">Log In or Register</Text>
    </AuthContainer>
  );
}

export default AuthPage;
