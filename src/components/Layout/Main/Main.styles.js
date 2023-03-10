import styled, { keyframes } from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 2;
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

const Layout = styled.section`
  padding: 40px;
  width: 400px;
  position: relative;
  transition: ${(props) => props.theme.theme.default.transition};
  border-radius: ${(props) => props.theme.theme.default.border_radius};
  background: ${(props) =>
    props.theme.darkTheme === true
      ? props.theme.theme.dark.main_background
      : props.theme.theme.light.main_background};
  animation: ${smoothFoodList} ease-in-out 1s;
`;

export { StyledMain, Layout };
