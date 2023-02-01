import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import group from "../../media/group.jpg";
import "./Retina.scss";
import { BsCheckLg } from "react-icons/bs";
const Retina = () => {
  return (
    <div className="container-fluid">
      <div className="row retina_row">
        <Col className="img"></Col>
        <Col className="details">
          <Col className="retinaDetails">
            <h3>
              Retina-Ready & <br /> Responsive
            </h3>
            <p>
              The entire idea of the retina-ready technology is to give sharper
              images, and to create something that would look as sharp as it
              would in print. This is what you will find in the Monstroid
              WordPress theme.
            </p>
            <ul>
              <li>
                <BsCheckLg />
                <span> Lorem ipsum dolor sit amet</span>
              </li>

              <li>
                <BsCheckLg />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <BsCheckLg />
                <span> Lorem ipsum dolor sit amet</span>
              </li>
            </ul>
          </Col>
        </Col>
      </div>
    </div>
  );
};

export default Retina;
