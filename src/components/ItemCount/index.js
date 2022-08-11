import "./ItemCount.css";
import { useState, useEffect } from "react";

function ItemCounter({ stock, onAddToCart, onAddShowModal }) {
  const [contador, setContador] = useState(0);
  const [cantStock, setCantStock] = useState(stock);


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
      onAddToCart();
      onAddShowModal();
    }
  }

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
    </div>
  );
}

export default ItemCounter;
