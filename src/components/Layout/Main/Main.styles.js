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
  color: ${(props) =>
    props.theme.darkTheme || props.theme.isChecked ? "#CCC" : "black"};
  background: ${(props) =>
    props.theme.darkTheme || props.theme.isChecked
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

const CenterMessagesLayout = styled.section`
  padding: 40px;
  width: 500px;
  overflow-wrap: break-word;
  position: relative;
  animation: ${smoothFoodList} 1s linear;
  transition: ${(props) => props.theme.theme.default.transition};
  border-radius: ${(props) => props.theme.theme.default.border_radius};
  background: ${(props) =>
    props.theme.darkTheme || props.theme.isChecked
      ? props.theme.theme.dark.main_background
      : props.theme.theme.light.main_background};
`;
export { StyledMain, CenterMessagesLayout, IdMessage };
