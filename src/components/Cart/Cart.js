import React, { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { Col, Container, Row } from "react-bootstrap";
import { FaProductHunt, FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, removeAll, totalPrice } = useContext(CartContext);


  return (
    <div className="cartContainer">
      <div className="cartTittle">
        <h2>Tu carrito</h2>
        <hr />
      </div>
      <hr />
      <Container className="cartGrid">
        <Row className="datosGrid">
          <Col m={2}>IMAGEN</Col>
          <Col m={3}>NOMBRE DEL PRODUCTO</Col>
          <Col m={2} className="datosCant">CANTIDAD</Col>
          <Col m={2}>PRECIO UNITARIO</Col>
          <Col m={2}>PRECIO TOTAL</Col>
          <Col m={1}></Col>
        </Row>
        <Container className="containerProds">
          {cart == "" ? (
            <div className="vacio">
              <p>¡El carrito está vacío!</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <Row key={item.id} className="prodGrid">
                  <Col m={2} className="itemImg">
                    <Link to={`/detail/${item.name}`}>
                      <img src={item.img} width="100px"  alt={item.name}></img>
                    </Link>
                  </Col>
                  <Col m={3} className="itemName">
                    {item.name} por {item.weight}
                  </Col>
                  <Col m={2} className="itemCont">{item.contador}</Col>
                  <Col m={2} className="itemPrice">{`$ ${item.price}`}</Col>
                  <Col m={2} className="subTotal">{`$ ${
                    item.contador * item.price
                  }`}</Col>
                  <Col m={1} className="itemClear">
                    <Button
                      className="clearProd"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Container>
      </Container>
      <hr />
      {cart == "" ? (
        <div className="cartBottom">
          <div className="total"></div>
          <div className="cartButtons">
            <Button as={Link} to="/" className="continue">
              Ir de compras
            </Button>
            <div className="clearFinBtn">
              <Button className="clearCart" onClick={removeAll} disabled>
                vaciar carrito
              </Button>
              <Button className="finalizar " disabled>
                FINALIZAR COMPRA
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cartBottom">
        <div className="total">TOTAL: ${totalPrice}</div>
        <div className="cartButtons">
          <Button as={Link} to="/" className="continue">
            Continuar comprando
          </Button>
          <div className="bottomButtons">
            <Button className="clearCart" onClick={removeAll}>
              vaciar carrito
            </Button>
            <Button className="finalizar ">
              FINALIZAR COMPRA
            </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Cart;
