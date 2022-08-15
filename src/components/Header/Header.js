import "./header.css";
import logo from "../../logo.png";
import CartWidget from "../Cart/CartWidget.js";
import {FaSearch} from "react-icons/fa"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";


function Header() {



  return (
    <Navbar bg="light" expand="lg" className="header__navbar" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="header__logo"><img src={logo} width="80px"/><div className="logoName">DISTRIBUIDORA <br/><span>GALICIA</span></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="link__active">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Todos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/especias">
                Especias
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/semillas">Semillas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Búsqueda.."
              className="me-2 search__input"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search__button"><FaSearch/></Button>
            <CartWidget/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }

export default Header;
