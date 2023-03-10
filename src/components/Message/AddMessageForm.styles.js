import styled from "styled-components";
import Button from "../UI/Button/Button";

const SendInput = styled.input`
  border-radius: 10px;
  padding: 7px;
  border: none;
  transition: ${(props) => props.theme.theme.default.transition};
  //font-size: 26px;
  background-color: ${(props) =>
    props.theme.darkTheme === true
      ? props.theme.theme.dark.message_input_layout
      : props.theme.theme.light.message_input_layout};
  color: ${(props) =>
    props.theme.darkTheme === true
      ? props.theme.theme.dark.text
      : props.theme.theme.light.text};
`;
const Form = styled.form`
  display: flex;
  justify-content: flex-end;
`;
const SendButton = styled(Button)`
  position: absolute;
  border-radius: 10px;
  padding: 7px;
  border: none;
  transition: ${(props) => props.theme.theme.default.transition};
  background-color: ${(props) =>
    props.theme.darkTheme === true
      ? props.theme.theme.dark.send_button_layout
      : props.theme.theme.light.send_button_layout};
  color: ${(props) =>
    props.theme.darkTheme === true
      ? props.theme.theme.dark.send_button_text
      : props.theme.theme.light.send_button_text};
`;

const StyledAddMessageForm = styled.div`
  display: flex;
  justify-content: center;
`;

export { SendInput, Form, SendButton, StyledAddMessageForm };
