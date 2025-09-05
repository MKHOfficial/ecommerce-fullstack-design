// Temporary version without authentication
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListingItems({ url, price, des, name, productId }) {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  const handleLike = () => {
    setLike(prev => !prev);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Redirect to login page
    navigate('/login');
  };

  const handleViewDetails = (e) => {
    e.preventDefault();
    navigate(`/product/${productId}`);
  };

  return (
    <div className="listing-item-card">
      <div className="product-image-container">
        <img 
          src={url || '/placeholder-image.jpg'} 
          alt={name} 
          className="product-image"
          onClick={handleViewDetails}
        />
        <button 
          id="LikeBtn" 
          onClick={handleLike}
          className={`like-btn ${like ? 'liked' : ''}`}
        >
          {like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </button>
      </div>
      
      <div className="product-info">
        <div className="product-price">{price}</div>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{des}</p>
        
        <div className="product-actions">
          <button className="view-details-btn" onClick={handleViewDetails}>
            View Details
          </button>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}