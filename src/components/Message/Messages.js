import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { StyledMessages } from "./Messages.styles";

const Messages = (props) => {
  const chatWindowRef = useRef(null);
  // Scroll to the latest message when the component is mounted or updated
  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [props.messages]);

  return (
    <StyledMessages ref={chatWindowRef}>
      {props.messages.map((data, index) => (
        <Message key={index} text={data.message} />
      ))}
    </StyledMessages>
  );
};

export default Messages;
