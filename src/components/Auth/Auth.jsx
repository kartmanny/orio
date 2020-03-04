import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text/Text';
import Form from 'components/Form';

const AuthContainer = styled.div`
  text-align: center;
`;

function AuthPage() {
  return (
    <AuthContainer>
      <Text type="heading1">Log In or Register</Text>
      <Form
        name="Sign In"
        cta="Sign In"
        inputs={[
          { name: 'username', type: 'text' },
          { name: 'password', type: 'password' }
        ]}
        onSubmit={(username, password) =>
          console.log(`username: ${username}, password: ${password}`)
        }
      />
    </AuthContainer>
  );
}

export default AuthPage;
