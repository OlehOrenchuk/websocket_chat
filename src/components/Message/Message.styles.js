import styled from "styled-components";

const TextLayout = styled.div`
  background-color: ${(props) =>
    props.theme.darkTheme === true
      ? props.theme.theme.dark.my_message_layout
      : props.theme.theme.light.my_message_layout};
  border-radius: 20px;
  padding: 5px 15px 5px 15px;
  transition: ${(props) => props.theme.theme.default.transition};
`;

const Text = styled.p`
  margin: 0;
  line-break: anywhere;
  width: fit-content;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  transition: ${(props) => props.theme.theme.default.transition};
  letter-spacing: 1px;
  color: #ffffff;
`;

export { TextLayout, Text };
