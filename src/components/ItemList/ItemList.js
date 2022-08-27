import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";

function ItemList({ data, category }) {
  const [type, setType] = useState();
  const [choiced, setChoiced] = useState();
  const [grid, setGrid] = useState();

  const ascendingPrice = [...data].sort((a, b) => a.price - b.price);
  const descendingPrice = [...data].sort((a, b) => b.price - a.price);
  const ascendingName = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
  const descendingName = [...data].sort((a, b) => (a.name > b.name ? -1 : 1));

  useEffect(() => {
    if (type == 1) {
      setChoiced(ascendingName);
    } else if (type == 2) {
      setChoiced(descendingName);
    } else if (type == 3) {
      setChoiced(ascendingPrice);
    } else if (type == 4) {
      setChoiced(descendingPrice);
    }
  }, [type]);

  return (
    <>
      <div className="filter__prod">
        <div className="breadcrumb__prod">
          <Link to="/">Productos / </Link>
          <span>{category}</span>
        </div>
        <div className="order__prod">
          <div className="viewRow__prod">
            <ul>
              <li>
                <button
                  id="normalGrid"
                  onClick={(e) => {
                    setGrid(e.target.id);
                  }}
                >
                  <BsFillGridFill />
                </button>
              </li>
              <li>
                <button
                  id="miniGrid"
                  onClick={(e) => {
                    setGrid(e.target.id);
                  }}
                >
                  <BsFillGrid3X3GapFill />
                </button>
              </li>
            </ul>
          </div>
          <Form.Select
            aria-label="Default select example"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option>Ordenar por</option>
            <option value="1">Nombre, A-Z</option>
            <option value="2">Nombre, Z-A</option>
            <option value="3">Precio, de menor a mayor</option>
            <option value="4">Precio, de mayor a menor</option>
          </Form.Select>
        </div>
      </div>
      <Row className="lista__prod">
        {choiced === undefined
          ? data.map((prod) => <Item key={prod.id} {...prod} grid={grid} />)
          : choiced.map((prod) => <Item key={prod.id} {...prod} grid={grid} />)}
      </Row>
    </>
  );
}

export default ItemList;
