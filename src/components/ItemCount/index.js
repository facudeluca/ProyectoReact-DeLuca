import "./ItemCount.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import logo from "../../logo.png";

function ItemCounter({ stock }) {
  const [contador, setContador] = useState(0);
  const [cantStock, setCantStock] = useState(stock);
  const [smShow, setSmShow] = useState(false);

  useEffect(()=>{
    setCantStock(stock)
  },[stock])

  function agregarItem() {
    if (cantStock >= 1) {
      setContador(contador + 1);
      setCantStock(cantStock - 1);
    }
  }
  function quitarItem() {
    if (contador > 1) {
      setContador(contador - 1);
      setCantStock(cantStock + 1);
    }
  }
  function addToCart() {
    if (contador >= 1) {
      setCantStock(cantStock - contador);
      setCantStock(cantStock);
      setSmShow(true);
    }
  }

  useEffect(() => {
    if (smShow === false) setContador(0);
  }, [smShow]);

  return (
    <div className="itemCounter">
      <div className="itemCounterBtn">
        <input
          type="button"
          value={"-"}
          id="minusItem"
          className="minusPlus"
          onClick={quitarItem}
        />
        <input
          type="number"
          name="itemAddCounter"
          min="0"
          value={contador}
          id="itemAddCounter"
          readOnly
        />
        <input
          type="button"
          value={"+"}
          id="plusIem"
          className="minusPlus"
          onClick={agregarItem}
        />
      </div>
      <div className="addItem">
        <input
          type="button"
          value="Add to Cart"
          id="addItemBtn"
          onClick={addToCart}
        />
      </div>

      <Modal
        size="m"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-sm"
            className="title__modal"
          >
            <img src={logo} alt="logo Distribuidora Galicia" width="40px" />{" "}
            <h2>DISTRIBUIDORA GALICIA</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mesage__modal">
          Has agregado {contador} productos al carrito
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ItemCounter;
