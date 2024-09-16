import React from "react";
import { ButtonForm } from "./ButtonStyled";

const Button = ({ children, ...props }) => {
  return <ButtonForm {...props}>{children}</ButtonForm>;
};

export default Button;
