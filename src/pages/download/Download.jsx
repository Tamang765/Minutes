import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Download.scss';
import {AiOutlineShoppingCart} from 'react-icons/ai';


const Download = () => {
  return (
    <div className="download_page">
        <div className="container">
            <Row>
            <Col sm={12} className="download_details">
                <AiOutlineShoppingCart className='cart_icon'/>
                <h2>ARE YOU IMPRESSED ?</h2>
                <p>
                Lorem ipsum dolor sit amet curabitur eu dapibus felis. Morbi ut dolor ut mi ultricies lobortis.
                Morbi et viverra turpis. Donec cursus ornare purus nec porttitor.
                </p>
                <button className="download_btn">Download Minutes Now <span></span> <AiOutlineShoppingCart className="download_icon"/> </button>
            </Col>
            </Row>
        </div>
    </div>
  )
}

export default Download