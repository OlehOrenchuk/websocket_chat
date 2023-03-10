import React from "react";
import { Text, TextLayout } from "./Message.styles";

const Message = (props) => {
  return (
    <>
      <TextLayout>
        <Text>{props.text}</Text>
      </TextLayout>
    </>
  );
};

export default Message;
