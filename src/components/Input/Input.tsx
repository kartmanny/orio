import React, { useState } from 'react';
import cx from 'classnames';
import styled from 'styled-components';

import Text from 'components/Text';
import styles from 'components/Input/input.module.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 2rem 0;
`;

interface IInputProps {
  name: string;
  type: 'text' | 'password' | 'number';
}

function Input({ name, type }: IInputProps) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Container>
      <label
        className={cx(styles.label, (active || !!value) && styles.active)}
        htmlFor={name}
      >
        <Text type="large">{name}</Text>
      </label>
      <input
        className={cx(styles.input, active && styles.active)}
        type={type}
        onFocus={() => setActive(true)}
        onChange={e => {
          setValue(e.target.value);
        }}
        onBlur={() => setActive(false)}
        id={name}
        name={name}
        value={value}
      />
    </Container>
  );
}

export default Input;
