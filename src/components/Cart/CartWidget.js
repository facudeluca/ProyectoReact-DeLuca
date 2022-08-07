import {AiOutlineShoppingCart} from 'react-icons/ai';



function Cart(){

    return (
        <div className="cartIcon">
            <AiOutlineShoppingCart className='icon__cartIcon'/>
            <input type="text" value="0" readOnly/>
        </div>
    )
}
 
export default Cart