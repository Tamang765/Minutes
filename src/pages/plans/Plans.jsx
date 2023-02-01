import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Plans.scss";
import { Link } from "react-router-dom";
import { BsTrophy } from "react-icons/bs";

const Plans = () => {
  return (
    <div className="plans">
      <Container>
        <Row>
          <Col sm={12} className="plan_info">
            <h2>Choose your best plan</h2>
            <p>
              Suspendisse egestas mattis rhoncus pellen tesque euismod erat at
              sed do eiusmod tempor posuere molestie lorem lectus interdum augue
            </p>
          </Col>
        </Row>
        <Row className="plan_table">
          <Col sm={3}>
            <div className="plan_details">
              <div className="plan_header">
                <strong>Basic</strong>
              </div>
              <div className="plan_body">
                <h4>
                  $9<span>99</span>
                </h4>
              </div>
              <div className="list_plan">
                <ul className="list_plan_details">
                  <li>5 Projects</li>
                  <li>5 GB of Storage</li>
                  <li>Up to 100 Users</li>
                  <li>10 GB Banwidth</li>
                  <li>Security Suite</li>
                </ul>
              </div>
              <button>
                <a to="/">SIGN UP NOW!</a>
              </button>
            </div>
          </Col>
          <Col sm={3}>
            <div className="plan_details">
              <div className="plan_header">
                <strong>Basic</strong>
              </div>
              <div className="plan_body">
                <h4>
                  $9<span>99</span>
                </h4>
              </div>
              <div className="list_plan">
                <ul className="list_plan_details">
                  <li>5 Projects</li>
                  <li>5 GB of Storage</li>
                  <li>Up to 100 Users</li>
                  <li>10 GB Banwidth</li>
                  <li>Security Suite</li>
                </ul>
              </div>
              <button>
                <a to="/">SIGN UP NOW!</a>
              </button>
            </div>
          </Col>
          <Col sm={3} className="premium_column">
            <div className="plan_details premium_details">
              <div className="plan_header premium_header">
                <strong>Premium</strong>
                <BsTrophy className="trophy" />
              </div>
              <div className="plan_body">
                <h4>
                  $9<span>99</span>
                </h4>
              </div>
              <div className="list_plan">
                <ul className="list_plan_details">
                  <li>5 Projects</li>
                  <li>5 GB of Storage</li>
                  <li>Up to 100 Users</li>
                  <li>10 GB Banwidth</li>
                  <li>Security Suite</li>
                </ul>
              </div>
              <button>
                <a to="/">SIGN UP NOW!</a>
              </button>
            </div>
          </Col>
          <Col sm={3}>
            {" "}
            <div className="plan_details">
              <div className="plan_header">
                <strong>Basic</strong>
              </div>
              <div className="plan_body">
                <h4>
                  $9<span>99</span>
                </h4>
              </div>
              <div className="list_plan">
                <ul className="list_plan_details">
                  <li>5 Projects</li>
                  <li>5 GB of Storage</li>
                  <li>Up to 100 Users</li>
                  <li>10 GB Banwidth</li>
                  <li>Security Suite</li>
                </ul>
              </div>
              <button>
                <a to="/">SIGN UP NOW!</a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Plans;
