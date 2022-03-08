import * as React from "react";
import styled from "styled-components";
import { Theme, Nav, Brand, Ul, Li, NavLinksStyles } from "./NavbarStyles";
import Resnav from "../Navbar/One";

const Navbar = (props: { brand: { name: string; to: string } }) => {
  const { brand } = props;

  return (
    <Nav>
      <Brand>
        <a href={brand.to} color="white">
          {brand.name}
        </a>
      </Brand>
      <Resnav />
    </Nav>
  );
};

export default Navbar;
