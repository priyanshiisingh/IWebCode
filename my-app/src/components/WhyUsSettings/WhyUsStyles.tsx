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

const Body = styled.div`
  width: 100%;
  position: absolute;
  background: white;
  font-family: ${Theme.fonts.heading};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 100px 160px 115px 155px;
`;

const Content = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const CoverImg = styled.div``;

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
  line-height: 1.8;
  margin: 0 10px;
  text-decoration: none;
  flex-direction: column;
`;

export { Theme, Body, Content, CoverImg, Li };
