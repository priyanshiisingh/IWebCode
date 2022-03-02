import * as React from "react";
import styled from "styled-components";
import {
  Theme,
  Body,
  Content,
  CoverImg,
  Li,
  ContentHeading,
  ContentDes,
  ContentImg,
} from "./WhyUsStyles";
import "./whyUsCss.css";

const WhyUs = (props: {
  contents: Array<{ logo: any; heading: string; description: string }>;
}) => {
  const { contents } = props;
  const ContentText: any = () =>
    contents.map(
      (content: { logo: string; heading: string; description: string }) => (
        <Li key={content.heading}>
          <div className="liMat">
            <ContentImg>
              <img src={content.logo} alt="image" width="100%" />
            </ContentImg>
            <div className="liCon">
              <ContentHeading>{content.heading}</ContentHeading>
              <ContentDes>{content.description}</ContentDes>
            </div>
          </div>
        </Li>
      )
    );

  return (
    <Body>
      <Content>
        <h1 className="contentMain">Why You Should Choose Us</h1>
        <ContentText />
      </Content>
      <CoverImg>
        <img
          src="https://untree.co/demos/impact/images/about-us-min.png"
          alt="image"
          width="100%"
        />
      </CoverImg>
    </Body>
  );
};

export default WhyUs;
