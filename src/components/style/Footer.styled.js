import styled from "styled-components";

export const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #202027;
  font-weight: bold;
`;
export const FooterContainer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 0 40px;
  flex-grow: 1;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-around;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    // margin: 20px;
    display: flex;
    color: inherit;
    text-decoration: none;
    padding: 1rem;
    // align-items: center;
    // justify-content: space-around;
  }
  a:hover {
    color: #adadad;
  }

  img {
    width: 1em;
    margin-right: 0.25rem;
  }
`;
