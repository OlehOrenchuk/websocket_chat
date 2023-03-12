import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { MessageLayout, StyledMessages } from "./Messages.styles";

const Messages = (props) => {
  const chatWindowRef = useRef(null);
  // Scroll to the latest message when the component is mounted or updated
  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [props.messages]);

  console.log(props.messages);
  return (
    <StyledMessages ref={chatWindowRef}>
      {props.messages.map((data, index) => (
        <MessageLayout
          key={index}
          currentUserId={props.currentUserId}
          user_id={data.user_id}
        >
          <Message
            key={index}
            currentUserId={props.currentUserId}
            user_id={data.user_id}
            username={data.username}
            text={data.message}
            time={data.createdTime}
          />
        </MessageLayout>
      ))}
    </StyledMessages>
  );
};

export default Messages;
