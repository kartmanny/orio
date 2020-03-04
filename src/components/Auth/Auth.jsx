import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import Context from 'assets/context/Context';

import Form from 'components/Form';
import Text from 'components/Text/Text';

const AuthContainer = styled.div`
  text-align: center;
  padding: 4rem 8rem 8rem 8rem;
`;

const AuthPage = ({ history }) => {
  const { dispatch } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const loginSubmitHandler = ({ username, password }) => {
    if (username !== 'Veronica' || password !== 'Paul') {
      alert('Invalid Login Credentials');
    } else {
      setLoading(true);
      setTimeout(() => {
        dispatch({ type: 'LOGIN' });
        history.push('/haus/profile');
      }, 1250);
    }
  };

  return (
    <AuthContainer>
      <Text type="title1" style={{ marginBottom: '3rem' }}>
        Log In or Register
      </Text>
      {loading ? (
        <Loader type="Circles" color="#ff5a5f" height={250} width={250} />
      ) : (
        <div style={{ maxWidth: '40rem', margin: 'auto' }}>
          <Form
            name="Login"
            cta="Log In"
            onSubmit={loginSubmitHandler}
            inputs={[
              { name: 'username', type: 'text' },
              { name: 'password', type: 'password' }
            ]}
          />
        </div>
      )}
    </AuthContainer>
  );
};

export default withRouter(AuthPage);
