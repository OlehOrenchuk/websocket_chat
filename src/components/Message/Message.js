import React from "react";
import {
  Username,
  Time,
  Text,
  TextLayout,
  TextAndTimeLayout,
} from "./Message.styles";

const Message = (props) => {
  // dd/mm/yyyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  }

  return (
    <>
      <TextLayout currentUserId={props.currentUserId} user_id={props.user_id}>
        {props.currentUserId !== props.user_id ? (
          <Username>{props.username}</Username>
        ) : null}
        <TextAndTimeLayout>
          <Text currentUserId={props.currentUserId} user_id={props.user_id}>
            {props.text}
          </Text>
          <Time currentUserId={props.currentUserId} user_id={props.user_id}>
            {formatDateFromTimestamp(props.time)}
          </Time>
        </TextAndTimeLayout>
      </TextLayout>
    </>
  );
};

export default Message;
