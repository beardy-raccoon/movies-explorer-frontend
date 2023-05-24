import React from 'react';
import './Register.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import Form from '../Form/Form';
import Input from '../Input/Input';
import MainLayout from '../MainLayout/MainLayout';
import GoogleAuthLink from '../GoogleAuthLink/GoogleAuthLink';


export default function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <MainLayout className={"signin-signup"}>
      <Form
        action={"register"}
        isValid={isValid}
        handleFormSubmit={handleFormSubmit}
      >
        <Input
          inputType={"text"}
          inputName={"name"}
          inputPlaceholder={"Имя"}
          autoComplete={"username"}
          required={true}
          minLength={2}
          inputError={errors.name}
          inputValue={values.name}
          handleChange={handleChange}
        />
        <Input
          inputType={"email"}
          inputName={"email"}
          inputPlaceholder={"E-mail"}
          autoComplete={"email"}
          required={true}
          minLength={3}
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
          minLength={5}
          inputError={errors.password}
          inputValue={values.password}
          handleChange={handleChange}
        />
      </Form>
      <GoogleAuthLink />
    </MainLayout>
  );
}