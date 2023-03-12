import React from "react";

import Navbar from "./Layout/Navbar/Navbar";
import Header from "./Layout/Header/Header";
import { DarkOverlay, LightOverlay } from "./Chat.styles";
import Main from "./Layout/Main/Main";

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
