import itemimg from "../ItemListContainer/item.jpg";
import "./itemListContainer.css";

function ItemListContainer(){
    return(
        <div className="itemContainer">
            <div className="item item1">
                <img src={itemimg}/>
                <h2>Item 1</h2>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className="item item2">
            <img src={itemimg}/>
                <h2>Item 2</h2>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className="item item3">
            <img src={itemimg}/>
                <h2>Item 3</h2>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className="item item4">
            <img src={itemimg}/>
                <h2>Item 4</h2>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
        </div>
    );
}

export default ItemListContainer;