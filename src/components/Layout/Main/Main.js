import React, { useEffect, useRef, useState } from "react";
import { IdMessage, CenterMessagesLayout, StyledMain } from "./Main.styles";
import Messages from "../../Message/Messages";
import AddMessageForm from "../../Message/AddMessageForm";
import { socket } from "../../../App.js";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");

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
      setCurrentUserId(socket.id);
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
      socket.off("receive-message");
      socket.off("user-disconnected");
      socket.off("user-connect");
      socket.off("user-connected");
      socket.disconnect();
    };
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    console.log(messages);
    socket.emit("send-message", message, username);
    setMessage("");
  };

  const handleSubmitUser = (event) => {
    event.preventDefault();
    setUser(true);
  };

  return (
    <StyledMain>
      <IdMessage>
        You connected with id{" "}
        <p style={{ display: "inline", color: "red", fontSize: "12px" }}>
          {currentUserId}
        </p>
      </IdMessage>
      <CenterMessagesLayout>
        {user ? (
          <>
            <Messages currentUserId={currentUserId} messages={messages} />
            <AddMessageForm
              handleSubmit={handleSubmitMessage}
              message={message}
              setMessage={setMessage}
              handleMessageChange={handleMessageChange}
            />
          </>
        ) : (
          <>
            <form action="" onSubmit={handleSubmitUser}>
              <input
                placeholder={"Enter your Name"}
                type="text"
                onChange={handleUserNameChange}
              />
            </form>
          </>
        )}
      </CenterMessagesLayout>
    </StyledMain>
  );
};

export default Main;
