import styled from "styled-components";

const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props?.currentUserId !== props?.user_id
      ? "#f2f2f7"
      : props.theme.darkTheme || props.theme.isChecked
      ? props.theme.theme.dark.my_message_layout
      : props.theme.theme.light.my_message_layout};
  border-radius: 10px;
  padding: 5px 15px 5px 15px;
  transition: ${(props) => props.theme.theme.default.transition};
`;

const Text = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0 0 15px 0;
  line-break: anywhere;
  width: fit-content;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  transition: ${(props) => props.theme.theme.default.transition};
  letter-spacing: 1px;
  color: ${(props) =>
    props?.currentUserId !== props?.user_id ? "black" : "#ffffff"};
`;

const Time = styled(Text)`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  padding: 0;
  width: fit-content;
`;

const Username = styled.p`
  margin: 0;
  font-style: normal;
  text-transform: capitalize;
  font-size: 13px;
  line-height: 20px;
  color: black;
  font-weight: 800;
`;

const TextAndTimeLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export { TextLayout, Text, Time, Username, TextAndTimeLayout };
