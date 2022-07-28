import "./ItemCount.css";
import {useState} from 'react';


function ItemCounter ({stock}){
    const [contador, setContador]= useState(0);
    const [Stock, setStock] = useState(stock);


    function agregarItem(){
       if (Stock > 0){        
            setContador(contador+1);
            setStock(Stock-1);
        };
    }
    function quitarItem(){
        if (contador > 1){
        setContador(contador-1);
        setStock(Stock+1);
        }
    }
    function addToCart(){
        if(contador >=1){
            alert("Has agregado" +" "+ contador +" "+ "productos al carrito");
            setStock(Stock-contador);
            setContador(0)
            stock = Stock;
            setStock(stock);
        }
    }



    return(
        <div className="itemCounter">
            <label htmlFor="itemAddCounter" id="stockCounterLabel">stock: {Stock}</label>
            <div className="itemCounterBtn">
            <input type="button" value={"-"} id="minusItem" className="minusPlus" onClick={quitarItem}/>
            <input type="number" name="itemAddCounter" min="0" value={contador} id="itemAddCounter" readOnly/>
            <input type="button" value={"+"} id="plusIem" className="minusPlus" onClick={agregarItem}/>
            </div>
            <div className="addItem">
            <input type="button" value="Add to Cart" id="addItemBtn" onClick={addToCart}/>
            </div>
        </div>
    )
}

export default ItemCounter