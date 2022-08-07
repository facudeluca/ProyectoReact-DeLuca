import "./ItemCount.css";
import { useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/img/logo.png"

function ItemCounter({prod}) {
  const [contador, setContador] = useState(0);
  const [stock, setStock] = useState(prod.stock);
  const [smShow, setSmShow] = useState(false);


  function agregarItem() {
    if (stock >= 1) {
      setContador(contador + 1);
      setStock(stock - 1);
    }
  }
  function quitarItem() {
    if (contador > 1) {
      setContador(contador - 1);
      setStock(stock + 1);
    }
  }
  function addToCart() {

    if (contador >= 1) {
      setStock(stock - contador);
      setStock(stock);
      setSmShow(true);
    }
  }
  useEffect(()=>{
    if(smShow==false)
    setContador(0)
  },[smShow])



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
          <Modal.Title id="example-modal-sizes-title-sm" className="title__modal">
            <img src={logo} alt="logo Distribuidora Galicia" width="40px"/> <h2>DISTRIBUIDORA GALICIA</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mesage__modal">Has agregado {contador} productos al carrito</Modal.Body>
      </Modal>
    </div>
  );
}

export default ItemCounter;

