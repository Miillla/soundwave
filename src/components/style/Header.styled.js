import styled from "styled-components";

export const BrandLogo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.25em;
  color: inherit;
  text-decoration: none;
  // margin-left: 4rem;
`;

export const BrandLogoName = styled.div`
  margin-left: 1rem;
`;
export const MainNav = styled.nav`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 1rem;
    // margin-right: 4rem;
  }
  a:hover {
    color: #adadad;
  }
`;
export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  width: 100%;
  // margin-right: 4rem;
`;
