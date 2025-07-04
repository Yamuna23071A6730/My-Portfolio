import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/rocket.gif";
import { FaGithub } from 'react-icons/fa';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-12">
          <Newsletter />
          <Col size={12} sm={6}>
            <img className="rounded-full w-16 m-2" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yamuna-latchipatruni-b7ba3928b"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Yamuna23071A6730"><FaGithub color="white" /></a>
              <a href="https://www.instagram.com/_yamuna_29_/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
