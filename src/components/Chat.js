import React from "react";
import Navbar from "./Layout/Navbar/Navbar";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import { DarkOverlay, LightOverlay } from "./Chat.styles";

const Chat = () => {
  return (
    <>
      <DarkOverlay />
      <LightOverlay />
      <Header />
      <Navbar />
      <Main />
    </>
  );
};

export default Chat;
