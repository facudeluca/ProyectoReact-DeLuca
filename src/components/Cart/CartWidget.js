import cartIco from "./cart.png";

function Cart(){
    return (
        <div className="cartIcon">
            <img src={cartIco}/>
            <input type="text" value="0"/>
        </div>
    )
}

export default Cart