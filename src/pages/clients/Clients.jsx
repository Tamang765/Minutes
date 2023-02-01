import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import boot from '../../media/bootstrap.jpg'
import {Link} from 'react-router-dom'
import envanto from '../../media/evanto.jpg'
import jquery from '../../media/jquery.jpg'
import './Clients.scss'



const Clients = () => {
  return (
    <div class="client-container px-5 py-5">
        <div class="row text-center">
            <div class="col-md-2 col-sm-4 col-xs-6"><button><img src={boot} alt="my image" /></button></div>
            <div class="col-md-2 col-sm-4 col-xs-6"><button><img src={envanto} alt="my image" /></button></div>
            <div class="col-md-2 col-sm-4 col-xs-6"><button><img src={jquery} alt="my image" /></button></div>
            <div class="col-md-2 col-sm-4 col-xs-6"><button><img src={boot} alt="my image" /></button></div>
            <div class="col-md-2 col-sm-4 col-xs-6"><button><img src={envanto} alt="my image" /></button></div>

        </div>
    </div>
  )
}

export default Clients
