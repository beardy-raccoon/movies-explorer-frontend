import React from "react";

export default function Input({
  inputType,
  inputName,
  inputPlaceholder,
  autoComplete,
  required,
  minLength,
  inputError,
  inputValue,
  handleChange
}) {
  return (
    <>
      <label className="form__label" htmlFor={`${inputName}`}>{`${inputPlaceholder}`}</label>
      <input
        className={`input form__input ${inputError && 'form__input_error'}`}
        type={`${inputType}`}
        placeholder={`${inputPlaceholder}`}
        name={`${inputName}`}
        autoComplete={`${autoComplete}`}
        value={inputValue || ""}
        onChange={handleChange}
        required={required}
        minLength={minLength}
      />
      <span className="input__error-text">{inputError || ''}</span>
    </>
  );
}