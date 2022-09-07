import React from "react";
import {
  BrandLogo,
  BrandLogoName,
  MainHeader,
  MainNav,
} from "../style/Header.styled";

const Header = () => {
  return (
    <MainHeader>
      <BrandLogo href="/">
        <img src="/images/logo.png" />
        <BrandLogoName>Soundwave</BrandLogoName>
      </BrandLogo>

      <MainNav>
        <ul>
          <li>
            <a href="/discover">Discover</a>
          </li>
          <li>
            <a href="/join">Join</a>
          </li>
        </ul>
      </MainNav>
    </MainHeader>
  );
};
export default Header;
