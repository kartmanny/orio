import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Context from 'assets/context';

import Text from 'components/Text/Text';
import Form from 'components/Form';

const AuthContainer = styled.div`
  text-align: center;
`;

interface IAuthPageProps {
  logout?: boolean;
}

function AuthPage({ logout = false }: IAuthPageProps) {
  const { dispatch } = useContext(Context);
  const history = useHistory();

  const handleLogin = (username: string, password: string) => {
    if (username === 'Kart' && password === 'Manny')
      dispatch({ type: 'LOGIN', payload: false });
    history.push('/favorites');
  };

  useEffect(() => {
    if (logout) {
      dispatch({ type: 'LOGOUT', payload: false });
    }
  }, [dispatch, logout]);

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
        onSubmit={handleLogin}
      />
    </AuthContainer>
  );
}

export default AuthPage;
