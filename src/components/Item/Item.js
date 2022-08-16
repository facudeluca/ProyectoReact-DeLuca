import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom"

function Item({name, img, weight, price, grid}) {


  return (
    <>
    <Col className="prod">
    <Link to={`/detail/${name}`}>
        <Card className={`${grid==="miniGrid" ? 'card__mini' : ''}`}>
      <Card.Img variant="top" className={`${grid==="miniGrid" ? 'img__mini' : ''}`} src={img} alt={name}/>
      <Card.Body>
        <Card.Title className='title__card' id='prodName'>{name} 
        </Card.Title>
        <div className='item__numbers'>
        <div className='weight'>{weight}</div>
          <div className='price'>{`$ ${price}`}</div>
        </div>
      </Card.Body>
    </Card>
    </Link>
    </Col>
    </>
  )
}

export default Item
