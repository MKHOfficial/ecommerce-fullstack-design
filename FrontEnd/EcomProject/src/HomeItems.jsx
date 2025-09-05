import "./HomeItems.css"

export default function HomeItems({name,price,url}){
    return(
        <div>
            
                <div className="HomeItems" style={{border: "1px solid black", height: "150px",width: "170px"}}>
                    <h4>{name}</h4>
                    <p>{price}</p>
                    <div className="ItemImage">
                        <img src={url} alt={name} style={{width: "60px", height: "50px",float: "right"}} />
                    </div>
                
            </div>
        </div>
    )
}