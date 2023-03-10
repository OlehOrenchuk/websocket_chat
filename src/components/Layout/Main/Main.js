import React, { useEffect, useState } from "react";
import { Layout, StyledMain } from "./Main.styles";
import Messages from "../../Message/Messages";
import AddMessageForm from "../../Message/AddMessageForm";
import socketIO from "socket.io-client";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socket = socketIO.connect("http://192.168.1.44:4000");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <StyledMain>
      <Layout>
        <Messages messages={messages} />
        <AddMessageForm
          handleSubmit={handleSubmit}
          message={message}
          setMessage={setMessage}
        />
      </Layout>
    </StyledMain>
  );
};

export default Main;
