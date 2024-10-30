import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Connection from "./Connection";

export const Footer = () => {
  return (
    <footer className="footer px-2">
      <Container>
        <Row className="align-items-center">
          <Connection />

          <Col size={6} sm={6}>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/fawzy-mohamed-501610236/"
                target="_blank"
                rel="noreferrer"
                className="in"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/Fawzy-uwk"
                target="_blank"
                rel="noreferrer"
                className="git"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.frontendmentor.io/profile/Fawzy-uwk"
                className="mentor"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
