import Chat from "./components/Chat";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { GlobalStyle, theme } from "./App.styles";
import io from "socket.io-client";

const socket = io.connect("http://192.168.1.108:4001");

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <ThemeProvider
      theme={{
        theme: theme,
        darkTheme: darkTheme,
        setDarkTheme: toggleTheme,
        isChecked: isChecked,
        setIsChecked: setIsChecked,
      }}
    >
      <GlobalStyle />
      <Chat />
    </ThemeProvider>
  );
}

export { App, socket };
