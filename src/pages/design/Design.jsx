import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pc from '../../media/pc.jpg'
import './Design.scss';


const Design = () => {
  return (
    <Container className='designPart'>
    <Row>
      <Col sm={8}><img src={pc} className="pc_img"/></Col>
      <Col sm={4} className="designPart_detail">
        <h3>Responsive <br/>Design</h3>
        <p>Irure officia minim esse duis est quis dolore ea. Consectetur proident nisi cillum qui pariatur quis eu. Consectetur elit ea veniam sit pariatur dolor exercitation. Aliquip laborum nulla quis cupidatat minim exercitation.</p>
        <button className="learn_more">Learn More</button>
      </Col>
    </Row>
  </Container>

  )
}

export default Design