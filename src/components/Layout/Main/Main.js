import React, { useEffect, useState } from "react";
import { Layout, StyledMain } from "./Main.styles";
import Messages from "../../Message/Messages";
import AddMessageForm from "../../Message/AddMessageForm";
import io from "socket.io-client";

const socket = io("http://192.168.1.41:4002");

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("checkbox", (isChecked) => {
      setIsChecked(isChecked);
    });
    return () => {
      socket.off("checkbox");
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  socket.on("typing", (isTyping) => {
    setIsTyping(isTyping);
  });

  return (
    <StyledMain>
      <Layout isChecked={isChecked} isTyping={isTyping}>
        <Messages messages={messages} />
        <AddMessageForm
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          handleSubmit={handleSubmit}
          message={message}
          setMessage={setMessage}
        />
      </Layout>
    </StyledMain>
  );
};

export default Main;
