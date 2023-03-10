import React from "react";
import Switcher from "./Switcher/Switcher";
import { StyledNavbar } from "./Navbar.styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Switcher />
    </StyledNavbar>
  );
};

export default Navbar;
