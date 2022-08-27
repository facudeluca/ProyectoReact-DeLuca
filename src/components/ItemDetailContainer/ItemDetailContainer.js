import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {DB} from "../../Data/DataFirebase.js"
import "./ItemDetailContainer.css";
import { PulseLoader } from "react-spinners";

function ItemDetailContainer(){
    const [data, setData] = useState();
    const {prodId} = useParams();
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const dbDoc = doc(DB, 'ProductList', prodId);
        getDoc(dbDoc)
        .then(res => setData({id:res.id, ...res.data()},setLoading(false)))
        .catch(err=>console.log(err))
        .finally(setLoading(true))
    }, [prodId]);

    return(
        <div className="detailContainer">
        {loading?<PulseLoader
          className="loading"
          color={"rgb(157, 197, 74)"}
          size={30}
        />:<ItemDetail {...data}/>}
        </div>
    )



}

export default ItemDetailContainer;