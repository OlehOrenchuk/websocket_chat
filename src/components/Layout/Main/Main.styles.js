import styled, { keyframes, css } from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const IdMessage = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  padding: 10px;
  transition: ${(props) => props.theme.theme.default.transition};
  color: ${(props) => (props.theme.darkTheme ? "#CCC" : "black")};
  background: ${(props) =>
    props.theme.darkTheme
      ? props.theme.theme.dark.main_background
      : props.theme.theme.light.main_background};
  border-radius: 5px;
`;

const smoothFoodList = keyframes`
  from {
    top: 60px;
    opacity: 0;
  }
  to {
    top: 0;
  }
`;

const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 2px rgba(75, 0, 130, 0.1);
    transform: translate(-50%, -50%)
  }
  25% {
    box-shadow: 0 0 0 5px rgba(75, 0, 130, 0.5);
    transform: translate(-50%, -50%);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(75, 0, 130, 0.9);
    transform: translate(-50%, -50%) 
  }
  75% {
    box-shadow: 0 0 0 5px rgba(75, 0, 130, 0.5);
    transform: translate(-50%, -50%);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(75, 0, 130, 0.1);
    transform: translate(-50%, -50%)
  }
`;

const Layout = styled.section`
  padding: 40px;
  width: 500px;
  overflow-wrap: break-word;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    animation: ${shadowAnimation} 2s linear infinite;
  }

  transition: ${(props) => props.theme.theme.default.transition};
  border-radius: ${(props) => props.theme.theme.default.border_radius};
  background: ${(props) =>
    props.theme.darkTheme || props.isChecked
      ? props.theme.theme.dark.main_background
      : props.theme.theme.light.main_background};
  ${(props) =>
    props.isTyping &&
    css`
      &::before {
        background: ${props.theme.typing_animation.color};
        animation: ${typingAnimation} 0.8s ease-in-out infinite;
      }
    `}
`;

export { StyledMain, Layout, IdMessage };
