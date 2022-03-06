import styled from "styled-components";

const Theme = {
  colors: {
    bg: `#008374`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  },
  fonts: {
    body: `IBM Plex Sans, sans-serif`,
    heading: `Montserrat, sans-serif`,
  },
};

const Nav = styled.nav`
  width: 100%;
  z-index: 9;
  position: absolute;
  padding-top: 15px;
  padding-bottom: 10px;
  background: ${Theme.colors.bg};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavLinksStyles = styled.a`
  a {
    color: rgba(255, 255, 255, 0.7);
  }

  a:hover {
    color: white;
  }
`;

const Brand = styled.a`
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  height: 50px;
  justify-content: center;
  line-height: 1.8;
  margin: 0 10px;
  text-decoration: none;
  white-space: nowrap;
`;

export { Theme, Nav, Brand, Ul, Li, NavLinksStyles };
