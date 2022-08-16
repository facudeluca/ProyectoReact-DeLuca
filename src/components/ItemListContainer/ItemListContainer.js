import "./itemListContainer.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import {getFetch, getProductsByCategory} from "../Data/Data.js";
import { useParams } from "react-router-dom";

function ItemListContainer() {

const [data, setData] = useState([]);
const {categoryId} = useParams()



useEffect(()=>{

  
  if(!categoryId){
    getFetch
    .then((resp)=>setData(resp))
    .catch(err=>console.log(err))
  }else{
    getProductsByCategory(categoryId).then(data=>{
      setData(data)
    })
  }
},[categoryId]);


  return (
    <Container className="contenedor__prod">
        <ItemList data={data} category={categoryId}/>
    </Container>
  );
}

export default ItemListContainer;
