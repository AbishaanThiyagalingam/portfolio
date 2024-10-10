import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/mylogo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a id = "link" href="https://www.linkedin.com/in/abishaan-thiyagalingam-3109382a3/"><img src={navIcon1} alt="" /></a>
                <a id = "insta" href="https://www.instagram.com/_.abishaan._/"><img src={navIcon3} alt="" /></a>
              </div>
              <p>Copyright 2024. All Rights Reserved | Abishaan</p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
