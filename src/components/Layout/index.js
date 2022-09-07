import React from "react";
import { Container } from "../style/Global.styled";
import Header from "./header";
import PropTypes from "prop-types";
import style from "./style.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
Layout.propTypes = { children: PropTypes.node };

export default Layout;
