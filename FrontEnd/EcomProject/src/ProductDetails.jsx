import { useState } from "react";
import "./ProductDetail.css";
import Footer from "./Footer";
import Header from "./Header";

export default function ProductDetail () {
  const [selectedImage, setSelectedImage] = useState("./T-Shirt.jpg");


  const images = [
    "./T-Shirt.jpg",
    "./Iphone.jpg",
    "./watch.jpg",
    "./HeadPhone1.jpg",
    "./T-Shirt1.jpg",
  ];

  return (
    <>
    <Header/>
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home &gt; Clothings &gt; Men’s wear &gt; Summer clothing
      </div>

      <div className="product-container">
        {/* Left: Images */}
        <div className="product-images">
          <img src={selectedImage} alt="Product" className="main-image" />
          <div className="thumbnail-row">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumbnail"
                className={`thumbnail ${
                  selectedImage === img ? "active" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Middle: Product Info */}
        <div className="product-info">
          <span className="stock">✔ In stock</span>
          <h2 className="title">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h2>
          <p className="rating">⭐⭐⭐⭐⭐ 9.3 • 32 reviews • 154 sold</p>

          {/* Pricing Table */}
          <div className="pricing">
            <div className="price-box">$98.00 <span>50-100 pcs</span></div>
            <div className="price-box">$90.00 <span>100-700 pcs</span></div>
            <div className="price-box">$78.00 <span>700+ pcs</span></div>
          </div>

          <table className="details-table">
            <tbody>
              <tr><td>Price:</td><td>Negotiable</td></tr>
              <tr><td>Type:</td><td>Classic shoes</td></tr>
              <tr><td>Material:</td><td>Plastic material</td></tr>
              <tr><td>Design:</td><td>Modern nice</td></tr>
              <tr><td>Customization:</td><td>Customized logo and design custom packages</td></tr>
              <tr><td>Protection:</td><td>Refund Policy</td></tr>
              <tr><td>Warranty:</td><td>2 years full warranty</td></tr>
            </tbody>
          </table>
        </div>

    
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button className="tab active">Description</button>
        <button className="tab">Reviews</button>
        <button className="tab">Shipping</button>
        <button className="tab">About seller</button>
      </div>

      <div className="tab-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
        </p>
      </div>
      <Footer/>
    </div>
    </>
  );
}
