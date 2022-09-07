import * as React from "react";
import Layout from "../components/Layout";
import {
  HomeMainSection,
  Title,
  SubTitle,
  Btn,
  ImgWrapper,
  LadyImage,
  CallToAction,
  HomePageCircle1,
  HomePageCircle2,
  HomePageCircle3,
} from "../components/style/Home.styled";

const IndexPage = () => {
  return (
    <Layout>
      <HomeMainSection>
        <ImgWrapper>
          <LadyImage />
        </ImgWrapper>
        <CallToAction>
          <Title>Feel The Music</Title>
          <SubTitle>Stream over 20 thousand songs with one click</SubTitle>
          <Btn href="/join">Join Now</Btn>
        </CallToAction>
      </HomeMainSection>
      <HomePageCircle1 />
      <HomePageCircle2 />
      <HomePageCircle3 />
    </Layout>
  );
};

export default IndexPage;
