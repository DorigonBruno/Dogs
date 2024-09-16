import React from "react";
import {
  ContainerInput,
  ErrorInput,
  InputForm,
  LabelForm,
} from "./InputStyled";

const Input = ({ label, type, name }) => {
  return (
    <ContainerInput>
      <LabelForm htmlFor={name}>{label}</LabelForm>
      <InputForm id={name} name={name} type={type} />
      <ErrorInput>Error</ErrorInput>
    </ContainerInput>
  );
};

export default Input;
