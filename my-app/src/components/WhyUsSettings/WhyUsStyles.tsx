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
  background: ${Theme.colors.light};
  font-family: ${Theme.fonts.heading};
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: row;
`;

const Content = styled.div`
padding-top: 100px;
  padding-bottom: 90px;
  font-size: 24px;
  font-weight: 700;
  max-height: fit-content
  max-width: 50%;
  margin-left:150px;
  margin-right:80px
`;

const ContentHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const ContentDes = styled.p`
  font-size: 15px;
`;

const ContentImg = styled.div`
width:100px;
height:50px
  border: 1px solid black;
`;

const CoverImg = styled.div`
  max-height: 100%;
  max-width: 50%;
  padding-top: 100px;
  padding-bottom: 90px;
  margin-right: 150px;
`;

const Li = styled.li`
  -webkit-box-align: center;
  margin-bottom: 30px;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: black;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.8;
  text-decoration: none;
  flex-direction: column;
`;

export {
  Theme,
  Body,
  Content,
  CoverImg,
  Li,
  ContentHeading,
  ContentDes,
  ContentImg,
};
