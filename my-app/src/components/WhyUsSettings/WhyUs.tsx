import * as React from "react";
import styled from "styled-components";
import { Theme, Body, Content, CoverImg, Li } from "./WhyUsStyles";

const WhyUs = (props: {
  contents: Array<{ heading: string; description: string }>;
}) => {
  const { contents } = props;
  const ContentText: any = () =>
    contents.map((content: { heading: string; description: string }) => (
      <Li key={content.heading}>
        <div>
          {content.heading}
          {content.description}
        </div>
      </Li>
    ));

  return (
    <Body>
      <Content>
        <h1>Why You Should Choose Us</h1>
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
