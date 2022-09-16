import React from "react";

import Layout from "../components/Layout";
import {
  DiscoverMainSection,
  CallToAction,
  Title,
  Icon,
  SubTitle,
  IconSection,
  CoverImage,
  IconImage,
} from "../components/style/Discover.styled";

const DiscoverPage = () => {
  return (
    <>
      <Layout>
        <DiscoverMainSection>
          <CallToAction>
            <Title>Discover new music</Title>
            <IconSection>
              <Icon>
                <IconImage src="/images/microphone.svg" />
                Charts
              </Icon>
              <Icon>
                <IconImage src="/images/albums.svg" />
                Albums
              </Icon>

              <Icon>
                <IconImage src="/images/more.svg" />
                More
              </Icon>
            </IconSection>
          </CallToAction>

          <CoverImage src="/images/covers.jpg" />
        </DiscoverMainSection>
        <SubTitle>
          By joining you can benefit by listening to the latest albums released.
        </SubTitle>
      </Layout>
    </>
  );
};
export default DiscoverPage;
