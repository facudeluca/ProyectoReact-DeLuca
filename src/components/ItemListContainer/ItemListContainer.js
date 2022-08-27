import "./itemListContainer.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../../Data/DataFirebase.js";
import { PulseLoader } from "react-spinners";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const colRef = collection(DB, "ProductList");

    if (categoryId) {
      const colFilterRef = query(colRef, where("cat", "==", categoryId));
      getDocs(colRef)
        .then((res) => {
          setData(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
          setLoading(false);
        })
        .finally(setLoading(true));
      getDocs(colFilterRef)
        .then((res) => {
          setData(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
          setLoading(false);
        })
        .finally(setLoading(true));
    } else {
      getDocs(colRef)
        .then((res) => {
          setData(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
          setLoading(false);
        })
        .finally(setLoading(true));
    }
  }, [categoryId]);


  return (
    <Container className="contenedor__prod">
      {loading ? (
        <PulseLoader
          className="loading"
          color={"rgb(157, 197, 74)"}
          size={30}
        />
      ) : (
        <ItemList data={data} category={categoryId} />
      )}
    </Container>
  );
}

export default ItemListContainer;
