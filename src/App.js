import React, { useState } from "react";

import socketIO from "socket.io-client";
import ChatPage from "./ChatPage";

const socket = socketIO.connect("http://192.168.1.41:4000");

function App() {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
  };
  return (
    <div>
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">Sign in to Open Chat</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          minLength={6}
          name="username"
          id="username"
          className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="home__cta">SIGN IN</button>
      </form>
      <ChatPage socket={socket} />
    </div>
  );
}

export default App;
