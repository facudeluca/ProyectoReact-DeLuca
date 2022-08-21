import "./itemListContainer.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import {DB} from "../../Data/DataFirebase.js"

function ItemListContainer() {

const [data, setData] = useState([]);
const {categoryId} = useParams()

useEffect(()=>{

  const colRef = collection(DB, "ProductList");

  if(categoryId){
    const  colFilterRef = query(colRef, 
      where('cat', '==', categoryId))
    getDocs(colRef)
    .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
    )
    getDocs(colFilterRef)
    .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
    )}else{
      getDocs(colRef)
      .then(res=> setData(res.docs.map(prod => ({id:prod.id, ...prod.data()})))
      )
    };  
  
},[categoryId]);


  return (
    <Container className="contenedor__prod">
        <ItemList data={data} category={categoryId}/>
    </Container>
  );
}

export default ItemListContainer;
