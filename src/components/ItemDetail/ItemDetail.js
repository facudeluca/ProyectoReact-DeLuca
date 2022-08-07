import { useState } from "react";
import "./itemDetail.css"
import Modal from "react-bootstrap/Modal";
import ItemImg from "../../assets/img/ajiMolido.jpeg"
import ItemCounter from "../ItemCount";
import Accordion from 'react-bootstrap/Accordion';
 



function ItemDetail({ dataItem }) {
  const load = require.context("../../assets/img/", true);
  const [smShow, setSmShow] = useState(false);

  setTimeout(() => {
    setSmShow(true)
  }, 2500);

  return (
    <Modal
    size="xl"
    show={smShow}
    onHide={() => setSmShow(false)}
    aria-labelledby="example-modal-sizes-title-sm">
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body className="item__modal">
      <img src={ItemImg} alt={dataItem.name} height="600px"/>
      <div className="item__info">
        <h1>{dataItem.name}</h1>
        <h5>{dataItem.brand}</h5>
        <hr/>
      <div className="price">
        <div>
        <h2>{dataItem.price}</h2>
        <p>por bolsa de: {dataItem.weight}</p>
        </div>
        <h6>En stock: {dataItem.stock} unidades</h6>
      </div>
      <ItemCounter prod={dataItem}/>
      <hr/>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
          {dataItem.info}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
    </Modal.Body>
  </Modal>
  )
}

export default ItemDetail;
