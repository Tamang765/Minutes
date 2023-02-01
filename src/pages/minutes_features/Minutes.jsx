import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Minutes.scss";
import { BsArrowRight } from "react-icons/bs";
import featureMinutes from "../../data/FeatureMinutes";

const Minutes = () => {
  return (
    <section className="feature_minutes">
      <Container id="Minutes">
        <Row>
          <Col sm={12} className="minutes_details">
            <h2>Features of Minutes</h2>
            <p>
              Suspendisse egestas mattis rhoncus pellen tesque euismod erat at
              sed do eiusmod tempor posuere molestie lorem lectus interdum augue
            </p>
          </Col>
        </Row>
        <Row className="row-2">
          {featureMinutes.map((item, index) => {
            return (
              <>
                <Col key={item.id} sm={4}>
                  <div className="minutes_item">
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                    <button className="Learn_more">
                      <a href="">
                        Learn More <BsArrowRight />
                      </a>
                    </button>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Minutes;
