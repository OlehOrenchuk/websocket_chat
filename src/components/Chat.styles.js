import styled from "styled-components";

const DarkOverlay = styled.div`
  position: absolute;
  z-index: 1;
  opacity: ${(props) =>
    props.theme.isChecked || props.theme.darkTheme ? 1 : 0};
  transition: ${(props) => props.theme.theme.default.transition};
  background-image: url(${(props) => props.theme.theme.dark.background_image});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

const LightOverlay = styled.div`
  position: absolute;
  z-index: 1;
  opacity: ${(props) =>
    props.theme.isChecked || props.theme.darkTheme ? 0 : 1};
  transition: ${(props) => props.theme.theme.default.transition};
  background-image: url(${(props) => props.theme.theme.light.background_image});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

export { DarkOverlay, LightOverlay };
