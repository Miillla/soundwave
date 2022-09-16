import React from "react";
import {
  MainFooter,
  MainContent,
  FooterContainer,
} from "../style/Footer.styled";

const Footer = () => {
  return (
    <MainFooter>
      <FooterContainer>
        <MainContent>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </MainContent>
        <MainContent>
          <ul>
            <li>
              <a href="#">
                <img src="/images/twitter.svg" />
                Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/facebook.svg" />
                Facebook
              </a>
            </li>
          </ul>
        </MainContent>
      </FooterContainer>
    </MainFooter>
  );
};

export default Footer;
