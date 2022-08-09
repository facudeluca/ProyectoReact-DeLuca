import React from "react";
import Item from "../Item/Item"
import Row from "react-bootstrap/Row";


function ItemList({ data }) {
  return (
    <Row className="lista__prod">
    {
    data.map((prod)=> (
        <Item key={prod.id} {...prod}/>
    ))
    }
  </Row>
  )
}

export default ItemList;
