import React from "react";
import StyledButton from "./Button.styles";

const Button = (props) => {
  return (
    <StyledButton
      type={props.type || "button"}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
