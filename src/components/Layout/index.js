import React from "react";
import { Container } from "../style/Global.styled";
import Header from "./header";
import PropTypes from "prop-types";
import style from "./style.css";
import Footer from "./footer";
import styled from "styled-components";

const Wrraper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Wrraper>
        <Container>
          <Header />

          {children}
        </Container>
        <Footer />
      </Wrraper>
    </>
  );
};
Layout.propTypes = { children: PropTypes.node };

export default Layout;
