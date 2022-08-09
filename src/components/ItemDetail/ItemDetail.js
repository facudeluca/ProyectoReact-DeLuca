import React from 'react';
import "./itemDetail.css";
import ItemCounter from "../ItemCount";
import Accordion from 'react-bootstrap/Accordion';


function ItemDetail({name, img, brand, weight, stock, info, price}) {
  

  return (
    <div className='itemDetail'>
      <img src={img}/>
      <div className="item__info">
        <h1>{name}</h1>
        <h5>{brand}</h5>
        <hr/>
      <div className="price">
        <div className='price__data'>
        <h2>{price}</h2>
        <p>por bolsa de: {weight}</p>
        </div>
        <h6>En stock: {stock} unidades</h6>
      </div>
      <hr/>
      <ItemCounter stock={stock} className="counter"/>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
        {info}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
    </div>
  )
}

export default ItemDetail;
