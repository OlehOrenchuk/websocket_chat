import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import Navbar from "./Layout/Navbar/Navbar";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import { DarkOverlay, LightOverlay } from "./Chat.styles";

const socket = io("http://192.168.1.41:4002");

const Chat = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    socket.on("checkbox", (isChecked) => {
      setIsChecked(isChecked);
    });
    return () => {
      socket.off("checkbox");
    };
  }, []);

  return (
    <>
      {/* {isChecked && <p>The checkbox is checked!</p>} */}
      <DarkOverlay isChecked={isChecked} />
      <LightOverlay isChecked={isChecked} />
      <Header />
      <Navbar />
      <Main />
    </>
  );
};

export default Chat;
