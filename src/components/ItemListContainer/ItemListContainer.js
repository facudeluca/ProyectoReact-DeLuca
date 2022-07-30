import "./itemListContainer.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import getFetch from "../Data/Data.js";

function ItemListContainer() {

const [data, setData] = useState([]);

useEffect(()=>{
    getFetch
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
},[]);

  return (
    <Container className="contenedor__prod">
        <ItemList data={data}/>
    </Container>
  );
}

export default ItemListContainer;
