import { useState, useEffect } from "react";
import {getProductById} from "../Data/Data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import "./ItemDetailContainer.css";

function ItemDetailContainer(){
    const [data, setData] = useState();
    const {prodId} = useParams();
    
    useEffect(()=>{
        getProductById(prodId)
        .then((res)=>setData(res))
        .catch(err=>console.log(err))


    }, [prodId]);

    return(
        <div className="detailContainer">
        <ItemDetail {...data}/>
        </div>
    )



}

export default ItemDetailContainer;