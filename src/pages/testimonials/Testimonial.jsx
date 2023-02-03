import React, { Component } from "react";

import Slider from "react-slick";
import "./Testimonial.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import photo from "../../media/phtot.jpg";
import carouselData from "./CaoruselData";

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
      infinite: true,
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
        <Slider {...settings} className="testimonia_slider">
       { carouselData.map((val,index)=>{    
        return(
        <div key={val.id}>
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
          </div>);
          })}
          {/* <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div> */}
          {/* <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card_slider">
              <Card.Body>
                <Card.Text className="details">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div className="author">
                <Card.Img variant="top" src={photo} />
                <div className="author_info">
                  <Card.Text className="author_name">Joseph Doe</Card.Text>
                  <Card.Text className="company_name">@company</Card.Text>
                </div>
              </div>
            </Card>
          </div> */}
          <div></div>
          <div></div>
        </Slider>
      </div>
    );
  }
}
