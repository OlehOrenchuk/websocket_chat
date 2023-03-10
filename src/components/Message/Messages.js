import React, { useEffect } from "react";
import Message from "./Message";
import { StyledMessages } from "./Messages.styles";

const Messages = (props) => {
  return (
    <StyledMessages>
      {props.messages.map((mes, index) => (
        <Message key={index} text={mes} />
      ))}
    </StyledMessages>
  );
};

export default Messages;
