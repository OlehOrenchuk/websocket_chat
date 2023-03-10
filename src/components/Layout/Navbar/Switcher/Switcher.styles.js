import styled from "styled-components";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;
  margin-right: 30px;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  //z-index: 2;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: ${(props) => props.theme.theme.default.transition};
  transition: ${(props) => props.theme.theme.default.transition};
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: ${(props) => props.theme.theme.default.transition};
    transition: ${(props) => props.theme.theme.default.transition};
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Span} {
    background-color: ${(props) =>
      props.theme.darkTheme === true
        ? props.theme.theme.dark.switcher
        : props.theme.theme.light.switcher};
  }
  &:hover + ${Span} {
    box-shadow: 0 0 40px
      ${(props) =>
        props.theme.darkTheme === true
          ? props.theme.theme.dark.switcher
          : props.theme.theme.light.switcher};
  }
  &:checked + ${Span}:before {
    --webkit-transform: translateX(56px);
    -ms-transform: translateX(56px);
    transform: translateX(56px);
  }
`;

export { Input, Span, Label };
