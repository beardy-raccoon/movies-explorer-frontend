import React from 'react';
import './Login.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import MainLayout from '../MainLayout/MainLayout';
import Form from '../Form/Form';
import Input from '../Input/Input';
import GoogleAuthLink from '../GoogleAuthLink/GoogleAuthLink';

export default function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values.email, values.password);
  };

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <MainLayout className={"signin-signup"}>
      <Form
        action={"login"}
        isValid={isValid}
        handleFormSubmit={handleFormSubmit}
      >
        <Input
          inputType={"email"}
          inputName={"email"}
          inputPlaceholder={"E-mail"}
          autoComplete={"email"}
          required={true}
          inputError={errors.email}
          inputValue={values.email}
          handleChange={handleChange}
        />
        <Input
          inputType={"password"}
          inputName={"password"}
          inputPlaceholder={"Пароль"}
          autoComplete={"current-password"}
          required={true}
          inputError={errors.password}
          inputValue={values.password}
          handleChange={handleChange}
        />
      </Form>
      <GoogleAuthLink />
    </MainLayout>
  );
}