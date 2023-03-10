import Chat from "./components/Chat";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { GlobalStyle, theme } from "./App.styles";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <ThemeProvider
      theme={{
        theme: theme,
        darkTheme: darkTheme,
        setDarkTheme: toggleTheme,
      }}
    >
      <GlobalStyle />
      <Chat />
    </ThemeProvider>
  );
}

export default App;
