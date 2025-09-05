import "./CartProduct.css"
export default function CartProduct({url,name,size,color,material,seller,price}){
    return(
        <div>
             <div className="CartTab">
                <div className="CartItem">
                    <div>
                    <img className="ItemImage" src={url} alt="Image" />
                    </div>
                    <div className="ItemDetails">
                    <h3>{name}</h3>
                    <p>Size:{size},  Color:{color}, Material:{material}</p>
                    <p>Seller: {seller}</p>
                     </div>
                    <div class="button-container">
        <button class="remove-btn">Remove</button>
        <button class="save-btn">Save for later</button>
    </div>
                     <div className="cartActions"> 
                    <span className="Price">{price}  </span>
                    <select className="quantity">
                    <option>Qty: 1</option>
                    <option>Qty: 2</option>
                    <option>Qty: 3</option>
                    </select>
                  </div>
                  
                </div>
            </div>
        </div>
    )
}