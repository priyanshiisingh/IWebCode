import * as React from "react";
import styled from "styled-components";
import { Theme, Nav, Brand, Ul, Li, NavLinksStyles } from "./NavbarStyles";
import Resnav from "./OptionsRes";

const Navbar = () => {
  return (
    <Nav>
      <Brand>
        <a href="#" color="white">
          Impact
        </a>
      </Brand>
      <Resnav />
    </Nav>
  );
};

export default Navbar;
