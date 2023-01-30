import React, { useEffect, useState, useRef } from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  //   You can connect to this code using the useeffect() function.
  //  After connecting, you can listen for message responses by calling the socket.on()
  //  function. The first argument is the name of the event that you want to listen for,
  //  and the second is the callback function that you will use to handle the event.
  //  The callback function will receive a data object as its only argument.
  //  This object will contain the content of the message that was received.
  //  You can then use the setmessages() function to update the messages array.

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      console.log(data);
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__main">
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
