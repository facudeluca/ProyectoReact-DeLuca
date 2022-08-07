import { useState, useEffect } from "react";
import {getFetch, getItem} from "../Data/Data.js";
import ItemDetail from "../ItemDetail/ItemDetail.js";

function ItemDetailContainer(){

    const [dataItem, setDataItem] = useState([]);
    
    useEffect(()=>{
        getItem
        .then((resp)=>setDataItem(resp))
        .catch(err=>console.log(err))


    });

    return(
        <ItemDetail dataItem={dataItem}/>
    )



}

export default ItemDetailContainer;