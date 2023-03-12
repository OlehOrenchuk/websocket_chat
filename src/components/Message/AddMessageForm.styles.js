import styled from "styled-components";
import Button from "../UI/Button/Button";

const SendInput = styled.input`
  flex-wrap: nowrap;
  border-radius: 10px;
  padding: 15px 20px;
  border: none;
  width: 100%;
  transition: ${(props) => props.theme.theme.default.transition};
  font-size: 16px;
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
  align-items: center;
  width: 100%;
`;
const SendButton = styled(Button)`
  position: absolute;
  right: 45px;
  border-radius: 20px;
  padding: 10px;
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
  padding: 20px 0 0 0;
  width: 100%;
`;

export { SendInput, Form, SendButton, StyledAddMessageForm };
