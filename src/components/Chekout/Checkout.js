import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { DB } from "../../Data/DataFirebase.js";
import { CartContext } from "../../context/CartContext.js";
import logo from "../../logo.png";
import { GiHandTruck } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import "./checkout.css";
import Modal from "react-bootstrap/Modal";
import { PulseLoader } from "react-spinners";
import { FiCheckSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

function Checkout() {

  const { cart, removeAll, totalPrice } = useContext(CartContext);
  const [envio, setEnvio] = useState(0);
  const [motoActive, setMotoActive] = useState(false);
  const [correoActive, setCorreoActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [email1, setEmail1]=useState('')
  const [email2, setEmail2]=useState('')
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [Id, setId] = useState("");
  const handleClose = () => setShow(false);


  //>>>>>>>>> CAMBIO MÉTODO DE ENVÍO <<<<<<<

  function selectMoto() {
    setEnvio(1000);
    setMotoActive(true);
    setCorreoActive(false);
  }
  function selectCorreo() {
    setEnvio(600);
    setCorreoActive(true);
    setMotoActive(false);
  }

  //>>>>>>>>> CREACIÓN DE ORDEN <<<<<<<

  useEffect(()=>{
      setBuyerEmail(email1) 
  },[email1])


  useEffect(() => {
    if ((buyerName !== "" , buyerPhone !== "" && email1===email2 && envio > 0 && buyerEmail!=='')) {
      setDisabled(false);
    }else{
      setDisabled(true)
    }
  }, [envio, buyerName, buyerPhone, email1, email2, buyerEmail]);

  const itemsBuyed = cart.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.contador,
  }));
  let order = {
    buyer: {
      name: buyerName,
      phone: buyerPhone,
      email: buyerEmail,
    },
    items: itemsBuyed,
    totalProductos: totalPrice,
    fecha: serverTimestamp(),
    envio: envio,
    total: totalPrice + envio,
  };

  const createOrder = () => {
    const orderInFirestore = async () => {
      const newOrderRef = doc(collection(DB, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    orderInFirestore()
      .then((res) => {
        setLoading(false);
        cart.forEach(async (item) => {
          const itemRef = doc(DB, "ProductList", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.contador),
          });
        });
        removeAll();
        setId(res.id);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(true));
  };

  const handleClick = () => {
    createOrder();
    setShow(true);
  };

  const back = () => {
    setShow(false);
  };

  
  return (
    <div className="checkout">
      <div className="checkoutContainer">
        <header>
          <img src={logo} alt="logo" width="40px" />
          <p>| Orden de compra</p>
        </header>
        <div className="contentCheckout">
          <div className="orderBody">
            <h2>Resumen de la compra</h2>
            <div className="productsContainer">
              {cart.map((item) => (
                <div key={item.id} className="product">
                  <img src={item.img} alt={item.name} width="60px" />
                  <div>
                    <h3>
                      {item.name} x {item.contador} u.
                    </h3>
                    <h4>${item.price} c/u</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="envios">
              <h2>Método de envío</h2>
              <div
                className={motoActive ? "envio active" : "envio"}
                id="moto"
                onClick={selectMoto}
              >
                <div className="titleEnv">
                  <GiHandTruck />
                  <div>
                    <h4>
                      Mensajería privada <span>(Sólo CABA y GBA)</span>
                    </h4>
                    <p>Llega hoy o mañana</p>
                  </div>
                </div>
                <div className="priceEnv">
                  <h4>$1000</h4>
                </div>
              </div>
              <div
                className={correoActive ? "envio active" : "envio"}
                id="correo"
                onClick={selectCorreo}
              >
                <div className="titleEnv">
                  <FaTruck />
                  <div>
                    <h4>Correo Argentino</h4>
                    <p>Llega entre 3 a 5 días hábiles</p>
                  </div>
                </div>
                <div className="priceEnv">
                  <h4>$600</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="payment">
            <h2>Método de pago</h2>
            <form>
              <label>Nombre y Apellido</label>
              <input
                type="name"
                name="name"
                onChange={(event) => setBuyerName(event.target.value)}
              />              
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail1(event.target.value)}
                style={{border: email1!=email2? '1px solid red':''}}
                />
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail2(event.target.value)}
                style={{border: email1!=email2? '1px solid red':''}}
              />
              <label>Teléfono</label>
              <input
                type="tel"
                name="tel"
                onChange={(event) => setBuyerPhone(event.target.value)}
              />
              <label>Detalles de tarjeta</label>
              <div className="cardDetails">
                <input
                  className="cardNum"
                  type="num"
                  name="cardNum"
                  readOnly
                  value="1234 5678 8765 4321"
                />
                <input
                  className="cardDate"
                  type="num"
                  name="cardDate"
                  readOnly
                  value="05/28"
                />
                <input
                  className="cardCVV"
                  type="num"
                  name="cardCVV"
                  readOnly
                  value="123"
                />
              </div>
            </form>
            <div className="address">
              <h2>Dirección de entrega</h2>
              <form>
                <div className="direccion">
                  <div>
                    <label>Calle</label>
                    <input type="text" name="calle" value="Calle" readOnly />
                  </div>
                  <div className="altura">
                    <label>altura</label>
                    <input type="num" name="altura" value="1234" readOnly />
                  </div>
                  <div className="cp">
                    <label>CP</label>
                    <input type="num" name="cp" value="2233" readOnly />
                  </div>
                </div>
                <div className="city">
                  <div>
                    <label>Ciudad</label>
                    <input
                      type="text"
                      name="ciudad"
                      value="Lomas de Zamora"
                      readOnly
                    />
                  </div>
                  <div>
                    <label>Provincia</label>
                    <input
                      type="text"
                      name="provincia"
                      value="Buenos Aires"
                      readOnly
                    />
                  </div>
                  <div></div>
                </div>
              </form>
            </div>
            <div className="total">
              <div>
                <h4>Subtotal</h4>
                <h4 className="totalPrice">${totalPrice}</h4>
              </div>
              <div>
                <h4>Envío</h4>
                <h4 className="totalEnv">${envio}</h4>
              </div>
              <div>
                <h4>Total</h4>
                <h4 className="totalCost">${envio + totalPrice}</h4>
              </div>
              {disabled ? (
                <button style={{ pointerEvents: "none", opacity: ".6" }}>
                  Faltan datos
                </button>
              ) : (
                <button onClick={handleClick}>Realizar Pedido</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modalCheck"
      >
        <Modal.Header>
          <Modal.Title>
            <img src={logo} alt="Logo Galicia" width="80px" />
            <div className="logoName">
              DISTRIBUIDORA <br />
              <span>GALICIA</span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <>
              <PulseLoader color={"rgb(157, 197, 74)"} size={30} />
            </>
          ) : (
            <div className="checkOrder">
              <FiCheckSquare />
              <h2>¡Orden realizada con éxito!</h2>
              <p>id de la orden : {Id}</p>
              <Link to="/">
                <button onClick={back}>Volver al inicio</button>
              </Link>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Checkout;
