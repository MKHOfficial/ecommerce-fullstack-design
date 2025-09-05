import "./Recommend.css"
export default function Recommend({price,url,des,name}){
    return(
        <div>
            <div className="RecommendItem" style={{border: "1px solid black", width: "190px", height: "280px"}}>
                <img src={url} alt={name} style={{height: "170px", width: "185px"}}/>
                <h3>{price}</h3>
                <p>{des}</p>
            </div>
        </div>
    )
}