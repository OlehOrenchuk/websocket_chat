import { createGlobalStyle } from "styled-components";
import dark_image from "./assets/dark_main_background.jpg";
import light_image from "./assets/light_main_background.jpg";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  *{
    font-family: 'Nunito', sans-serif;
  }
  *:focus {
    outline: none;
  }
  html,body {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  ::placeholder {
    color: ${(props) =>
      props.theme.darkTheme || props.theme.isChecked
        ? props.theme.theme.dark.placeholder
        : props.theme.theme.light.placeholder};
  }
`;

const theme = {
  default: {
    transition: "0.4s ease-in-out",
    border_radius: "10px",
  },
  dark: {
    text: "#fff",
    main_background: "#292f3f",
    send_button_layout: "#837dff",
    my_message_layout: "#837dff",
    // my_message_text: "#01a9f1",
    message_input_layout: "#272A35",
    placeholder: "#a5a7ab",
    send_button_text: "#fff",
    switcher: "#837dff",
    // background_image: "linear-gradient(to right, #0f0c29, #302b63, #24243e);",
    background_image: dark_image,
  },
  light: {
    text: "#272A35",
    main_background: "#fff",
    send_button_layout: "#01a9f1",
    my_message_layout: "#01a9f1",
    // my_message_text: "#01a9f1",
    message_input_layout: "#ccc",
    placeholder: "#ccccc",
    send_button_text: "#fff",
    switcher: "#01a9f1",
    // background_image: "linear-gradient(to right, #00416A, #E4E5E6, #00416A);",
    background_image: light_image,
  },
};

export { GlobalStyle, theme };
