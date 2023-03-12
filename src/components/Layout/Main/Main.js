import React, { useEffect, useState } from "react";
import { IdMessage, Layout, StyledMain } from "./Main.styles";
import Messages from "../../Message/Messages";
import AddMessageForm from "../../Message/AddMessageForm";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://192.168.1.44:4001");

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    // socket.on("message", (message) => {
    //   setMessages((messages) => [...messages, message]);
    // });
    socket.on("user-connected", (user_id) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: `User with id ${user_id} connected` },
      ]);
    });

    socket.on("connect", () => {
      setCurrentUser(socket.id);
    });

    // socket.on("user-connected", (username_id) => {
    //   console.log(`${username_id} connected`);
    // });

    socket.on("user-disconnected", (username) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: `User with id ${username} disconnected` },
      ]);
    });

    socket.on("receive-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("send-message", message);
    setMessage("");
  };

  return (
    <StyledMain>
      <IdMessage>
        You connected with id{" "}
        <p style={{ display: "inline", color: "red", fontSize: "12px" }}>
          {currentUser}
        </p>
      </IdMessage>
      <Layout>
        <Messages messages={messages} />
        <AddMessageForm
          handleSubmit={handleSubmit}
          message={message}
          setMessage={setMessage}
          handleMessageChange={handleMessageChange}
        />
      </Layout>
    </StyledMain>
  );
};

export default Main;
