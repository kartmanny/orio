import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text/Text';
import Input from 'components/Input';

import styles from 'components/Form/form.module.scss';

const FormContainer = styled.form`
  padding: 2rem 5rem;
  border: 2px solid var(--seed-border-light);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-width: min(100vw, 20rem);
  max-width: 35rem;
  margin: 4rem auto;
`;

const SubmitButton = styled.button`
  border: 1px solid var(--seed-color-primary);
  padding: 0.5rem 2rem;
  color: white;
  background-color: var(--seed-color-primary);
  border-radius: 0.6rem;
  margin-top: 2rem;
  cursor: pointer;
  outline: none;
`;

interface IFormProps {
  name: string;
  cta: string;
  onSubmit: (username: string, password: string) => void;
  inputs: Array<any>;
}

function Form({ name, cta, inputs, onSubmit }: IFormProps) {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputs: any[] = Array.from(
      e.currentTarget.getElementsByTagName('input')
    );
    const formData = { username: '', password: '' };
    inputs.forEach(input => {
      const { name, value } = input;
      (formData as any)[name] = value;
    });
    onSubmit(formData.username, formData.password);
  };
  return (
    <FormContainer action="#" onSubmit={onSubmitHandler}>
      <Text type="heading3" className={styles.marginBottom}>
        {name}
      </Text>
      {inputs.map(({ name, type }, index) => (
        <Input key={index} name={name} type={type} />
      ))}
      <SubmitButton>
        <Text type="large" className={styles.loginButton}>
          {cta}
        </Text>
      </SubmitButton>
    </FormContainer>
  );
}

export default Form;
