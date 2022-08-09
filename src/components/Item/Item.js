import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCount';
import Col from "react-bootstrap/Col";
import {AiFillInfoCircle} from "react-icons/ai";
import {Link} from "react-router-dom"

function Item({name, img, weight, price, stock}) {



  return (
    <>
    <Col className="prod">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={name} height="286px"/>
      <Card.Body>
        <Card.Title className='title__card'>{name} 
        <Link to={`/detail/${name}`}>
        <button><AiFillInfoCircle/></button>
        </Link>
        </Card.Title>
        <div className='item__numbers'>
        <div className='weight'>{weight}</div>
          <div className='price'>{price}</div>
        </div>
        <ItemCounter stock={stock}/>
      </Card.Body>
    </Card>
    </Col>
    </>
  )
}

export default Item
