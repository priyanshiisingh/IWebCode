import * as React from "react";
import styled from "styled-components";
import { Theme, Nav, Brand, Ul, Li } from "./NavbarStyles";

const Navbar = (props: {
  brand: { name: string; to: string };
  links: Array<{ name: string; to: string }>;
}) => {
  const { brand, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <Li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Li>
    ));

  return (
    <Nav>
      <Brand>
        <a href={brand.to}>{brand.name}</a>
      </Brand>
      <Ul>
        <NavLinks />
      </Ul>
    </Nav>
  );
};

export default Navbar;
