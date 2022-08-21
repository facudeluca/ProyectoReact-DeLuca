import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {DB} from "../../Data/DataFirebase.js"
import "./ItemDetailContainer.css";

function ItemDetailContainer(){
    const [data, setData] = useState();
    const {prodId} = useParams();
    
    useEffect(()=>{
        const dbDoc = doc(DB, 'ProductList', prodId);
        getDoc(dbDoc)
        .then(res => setData({id:res.id, ...res.data()}))
        .catch(err=>console.log(err))
        .finally(console.log())
    }, [prodId]);

    return(
        <div className="detailContainer">
        <ItemDetail {...data}/>
        </div>
    )



}

export default ItemDetailContainer;