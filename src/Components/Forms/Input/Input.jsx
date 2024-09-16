import React from "react";
import {
  ContainerInput,
  ErrorInput,
  InputForm,
  LabelForm,
} from "./InputStyled";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <ContainerInput>
      <LabelForm htmlFor={name}>{label}</LabelForm>
      <InputForm
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <ErrorInput>{error}</ErrorInput>}
    </ContainerInput>
  );
};

export default Input;
