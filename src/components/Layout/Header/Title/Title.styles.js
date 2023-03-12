import styled from "styled-components";

const StyledTitle = styled.p`
  margin: 0;
  padding: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.theme.default.border_radius};
  transition: ${(props) => props.theme.theme.default.transition};
  color: ${(props) =>
    props.theme.darkTheme || props.theme.isChecked
      ? props.theme.theme.dark.text
      : props.theme.theme.light.text};
  background: ${(props) =>
    props.theme.darkTheme || props.theme.isChecked
      ? props.theme.theme.dark.main_background
      : props.theme.theme.light.main_background};
`;

export default StyledTitle;
