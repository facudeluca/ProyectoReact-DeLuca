import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCount';
import Col from "react-bootstrap/Col";
function Item({prod}) {


const cargarImagen = require.context("../../assets/img/", true);

  return (
    <Col className="prod">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cargarImagen(`./${prod.img}`)} alt={prod.name} height="286px"/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <div className='item__numbers'>
        <div className='weight'>{prod.weight}</div>
          <div className='price'>{prod.price}</div>
        </div>
        <ItemCounter prod={prod}/>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Item
