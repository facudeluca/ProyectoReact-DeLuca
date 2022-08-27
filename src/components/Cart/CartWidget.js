import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { cantInCart } = useContext(CartContext);

  return (
    <div className="cartIcon">
      <Link to="/cart">
        <AiOutlineShoppingCart className="icon__cartIcon" />
      </Link>
      {cantInCart !== 0 ? <input type="text" value={cantInCart} readOnly /> : ""}
    </div>
  );
}

export default Cart;
