import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom"

function Item({name, img, weight, price, grid, id, stock}) {


  return (
    <>
    <Col className="prod">
    <Link to={`/detail/${id}`}>
      {stock==0?<div className={`${grid==="miniGrid" ? 'noStock__mini' : 'noStock'}`}>SIN STOCK</div>:''}
        <Card className={`${grid==="miniGrid" ? 'card__mini' : ''}`}style={{opacity: stock==0?".5":"1"}}>          
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
