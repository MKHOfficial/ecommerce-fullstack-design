
import "./Offers.css"
export default function Offers({src,name,discount})
{


    return(
        <div className="OffersSection">
            <br />
           
            <div className="OffersCard">
            <div className="OfferImg">
                <img src={src} alt={name}/>    
            </div>
            <span className="OfferName">{name}</span>
            <br /><br />
            <span className="Discount">{discount}</span>
            </div>
        </div>
    )
}
{/* <p><img src={src} alt={name} />{name} <br /><span className="Discount">{discount}</span></p> */}