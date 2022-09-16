import * as React from "react";

import Header from "../components/Layout/header";
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
import style from "../components/Layout/style.css";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 0 40px;
  flex-grow: 1;
`;

const IndexPage = () => {
  return (
    <>
      <Container>
        <Header />
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
      </Container>
      <HomePageCircle1 />
      <HomePageCircle2 />
      <HomePageCircle3 />
    </>
  );
};

export default IndexPage;
