import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineLinkedin,
  AiOutlineGooglePlus,
  AiFillInstagram,
} from "react-icons/ai";
import { BiBasketball } from "react-icons/bi";
import paypal from "../../media/footer/paypal.png";
import visa from "../../media/footer/visa.png";
import master_card from "../../media/footer/master_card.png";
import verisign from "../../media/footer/yerisign.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="footer_minutes_details">
              <h3>Minutes</h3>
              <p>
                Ullamco occaecat nulla sunt et laboris et officia nisi ullamco
                aliquip. Ullamco est veniam occaecat aliquip nulla. .
              </p>
              <ul className="footer_icon">
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <AiFillFacebook />
                </li>
                <li>
                  <BiBasketball />
                </li>
                <li>
                  <AiOutlineLinkedin />
                </li>
                <li>
                  <AiOutlineGooglePlus />
                </li>
                <li>
                  <AiFillInstagram />
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4} className="related_links">
            <h3>Related Links</h3>
            <Row>
              <Col sm={3}>
                <ul className="footer_list">
                  <li>About Us</li>
                  <li>Testimonials</li>
                  <li>Our Team</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
              <Col sm={3}>
                <ul className="footer_list">
                  <li>About Us</li>
                  <li>Testimonials</li>
                  <li>Our Team</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={4} className="payment_section">
            <h3>Payment Methods</h3>
            <ul className="payment">
              <li>
                <a href="">
                  <img src={paypal}></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={visa}></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={master_card}></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={verisign}></img>
                </a>
              </li>
            </ul>
            <p>
              © 2016. Minutes. All Rights Reserved.
              <br />
              Designed, developed & Maintained by Theme.Express
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
