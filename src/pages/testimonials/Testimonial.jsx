import React, { Component } from "react";

import Slider from "react-slick";
import "./Testimonial.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import photo from "../../media/phtot.jpg";
import testimonials from "./CaoruselData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

export default class Testimonial extends Component {
  render() {
    var settings = {
      dots: true,
      nextArrow:<SampleNextArrow/>,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="container pt-5">
        <Row>
          <Col sm={12} className="Testimonials_details">
            <h2>What our clients say</h2>
            <p>
              Suspendisse egestas mattis rhoncus pellen tesque euismod erat at
              sed do eiusmod tempor posuere molestie lorem lectus interdum augue
            </p>
          </Col>
        </Row>
     <Slider {...settings} className="testimonia_slider" >
  { testimonials.map((val,index) =>{
           return( <div key={val.id}>
               <Card className="card_slider">
                 <Card.Body>
                   <Card.Text className="details">
                     {val.details}
                   </Card.Text>
                 </Card.Body>
                 <div className="author">
                   <Card.Img variant="top" src={photo} />
                   <div className="author_info">
                     <Card.Text className="author_name">{val.author}</Card.Text>
                     <Card.Text className="company_name">{val.company}</Card.Text>
                   </div>
                 </div>
               </Card>
             </div>

            )})} </Slider>
        
        
       
      </div>
    );
  }
}
