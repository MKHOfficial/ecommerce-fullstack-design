import Header from "./Header"
import "./Home.css"
import Offers from "./Offers"
import HomeItems from "./HomeItems"
import Recommend from "./Recommend"
import Footer from "./Footer"
export default function Home(){
    return (
        <div className="Body">
            {/* <Header/> */}
            {/* <div className="MainItem">
                <span className="HeadSpan">Latest Trending <br /><b>Electronic Items</b></span>
                <button>Learn more</button>
                <img src="https://images.unsplash.com/photo-1619532550465-ad4dc9bd680a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wJTIwbW9iaWxlJTIwYW5kJTIwYWlycG9kcyUyMGluJTIwb25lJTIwZnJhbWV8ZW58MHx8MHx8fDA%3D" alt="main Headming Picture" />
            </div> */}
                <br />
            {/* <div className="Products" style={{border: "1px solid black"}}>
            <Offers src="./watch.jpg" name="Watch" discount="-15%"/>
            <Offers src="./Laptop.jpg" name="Laptop" discount="-15%"/>
            <Offers src="./HeadPhone.jpg" name="HeadPhone" discount="-15%"/>
            <Offers src="./HeadPhones.jpg" name="HeadPhones" discount="-15%"/>
            <Offers src="./CanonMobile.jpg" name="CanonMobile" discount="-15%"/>
            </div>
            <br /><br />
                <div className="HomeCategory" style={{border: "1px solid  rgb(237, 234, 234)", width: "320px", height: "300px", borderRadius: "5px", position: "absolute", marginLeft: "70px"}}>
                        <h3 style={{position: "absolute", marginTop:"60px", marginLeft: "60px", fontSize: "25px"}}>Home <br />and outdoor</h3>
                    <img src="https://media.istockphoto.com/id/2223039874/photo/modern-minimalist-interior-with-armchair-wooden-stool-and-plant.webp?a=1&b=1&s=612x612&w=0&k=20&c=CUSPEEogv10TWg_P6IBIcCq56f31akJ3KePznj2AWCg=" alt="Home Category Picture"  style={{width: "300px", height: "300px", borderRadius: "10px"}}/>
                
            </div>
              <div className="HomeItemsTab">
                <HomeItems name="Hot chairs" price="From USD 19" url="./SoftChair.jpg"/>
                <HomeItems name="Lamp" price="From USD 19" url="./Lamp.jpg"/>
                <HomeItems name="Kitchen Dises" price="From USD 19" url="./KitchenDishes.jpg"/>
                <HomeItems name="Coffee Maker" price="From USD 19" url="./CoffeeMaker.jpg"/>
                <HomeItems name="Kithen Mixer" price="From USD 19" url="./KithenMixer.jpg"/>
                <HomeItems name="Pot" price="From USD 19" url="./Pot.jpg"/>
                <HomeItems name="Home Apliance" price="From USD 19" url="./Home Apliance.jpg"/>
                <HomeItems name="Moving Chair" price="From USD 19" url="./MovingChair.jpg"/>
              </div>
                   <br />
                   <div className="HomeCategory" style={{border: "1px solid  rgb(237, 234, 234)", width: "320px", height: "310px", borderRadius: "5px", position: "absolute", marginLeft: "70px"}}>
                        <h3 style={{position: "absolute", marginTop:"30px", marginLeft: "40px", fontSize: "25px"}}>Consumer <br />and Electronic <br />gadgets</h3>
                    <img src="https://images.unsplash.com/photo-1621570549610-79caf7636afa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlwaG9uZSUyMGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" alt="Home Category Picture"  style={{width: "300px", height: "300px", borderRadius: "10px"}}/>
                
            </div>
              <div className="HomeItemsTab">
                <HomeItems name="Smart Watch" price="From USD 19" url="./watch.jpg"/>
                <HomeItems name="Head Phone" price="From USD 19" url="./HeadPhone.jpg"/>
                <HomeItems name="Camera" price="From USD 19" url="./Camera.jpg"/>
                <HomeItems name="Kettle" price="From USD 19" url="./Kettle.jpg"/>
                <HomeItems name="Laptop" price="From USD 19" url="./Laptop.jpg"/>
                <HomeItems name="Mobile" price="From USD 19" url="./Mobile.jpg"/>
                <HomeItems name="Tablet" price="From USD 19" url="./RealmeTab.jpg"/>
                <HomeItems name="Washing Machine" price="From USD 19" url="./WashingMachine.jpg"/>
              </div> */}
                {/* <h2 style={{marginLeft: "80px"}}>Recommended Items</h2>
              <div className="RecommendTab">
                <Recommend url="./T-Shirt.jpg" price="$10.30" des="T shirts with multiple colors for Men" 
                name="T shirt"/>
                <Recommend url="./T-Shirt1.jpg" price="$19.99" des="Blue T shirt for Men" 
                name="T shirt"/>
                <Recommend url="./LeatherWallet.jpg" price="$10.30" des="Leather Wallet" 
                name="T shirt"/>
                <Recommend url="./BlueCoat.jpg" price="$10.20" des="Blue Coat for Men" 
                name="T shirt"/>
                <Recommend url="./BrownWinterCoat.jpg" price="$9.30" des="Brown Winter Coat" 
                name="T shirt"/>
                <Recommend url="./Bag.jpg" price="$10.30" des="Jeans Bag for travel for Men" 
                name="T shirt"/>
                <Recommend url="./JeansShort.jpg" price="$10.30" des="Jeans short for Men blue Color" 
                name="T shirt"/>
                <Recommend url="./HeadPhone1.jpg" price="$15.30" des="Head phones for Gaming with mic" 
                name="T shirt"/>
                <Recommend url="./Camera.jpg" price="$10.30" des="Canon Camera Black 100X zoom" 
                name="T shirt"/>
                <Recommend url="./Kettle.jpg" price="$10.30" des="Electric Kettle " 
                name="T shirt"/>   
              </div> */}
              <Footer/>
        </div>
    )
}