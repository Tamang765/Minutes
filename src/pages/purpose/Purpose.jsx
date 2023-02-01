import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from '../../media/phone.jpg'
import './Purpose.scss'
const Purpose = () => {
  return (
        <Container className="purpose">
          <Row>
            <Col  center-content id="purpose_details">
                <h3>Multipurpose <br/>
              Template</h3>
              <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis aliquam. Aliquam in tortor enim.</p>    
              <button className='Learn_more'>LEARN MORE</button>
            </Col>
            <Col sm={6}><img src={phone} alt="" /></Col>
          </Row>
        </Container>
  )
}

export default Purpose