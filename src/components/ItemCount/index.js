import "./ItemCount.css";
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCounter({ onAddToCart, onAddShowModal, itemData }) {
  const [contador, setContador] = useState(1);
  const { addProduct, cart } = useContext(CartContext);
  const [stock, setStock] = useState(itemData.stock);
  const itemDataCount = {
    ...itemData,
    contador,
    stock
  };

  
  function agregarItem() {
    if (itemData.stock > 1 && contador < stock) {
      setContador(contador + 1);
    }
  }
  function quitarItem() {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }
  function addToCart() {
    if (stock >= 1) {
      onAddToCart();
      onAddShowModal();
    }
  }
  

  useEffect(() => {
    cart.forEach((e) => {
      if (e.id === itemData.id) {
        setStock(e.stock - e.contador);
      }
    });
  }, [cart]);


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
          style={{
            pointerEvents: stock == 0 ? "none" : "all",
            opacity: stock == 0 ? ".5" : "1",
          }}
          type="button"
          value={stock == 0 ? "No hay más stock" : "Agregar al carrito"}
          id="addItemBtn"
          onClick={() => {
            addToCart();
            addProduct({ ...itemDataCount });
          }}
        />
      </div>
    </div>
  );
}

export default ItemCounter;
