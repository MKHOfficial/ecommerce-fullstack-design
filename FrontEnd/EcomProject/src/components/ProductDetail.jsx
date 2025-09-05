// src/components/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/api';
import { useAuth } from '../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <div className="main-image">
          <img src={product.images[selectedImage].url} alt={product.name} />
        </div>
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={product.name}
              className={selectedImage === index ? 'active' : ''}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="price">
          <span className="current-price">${product.discountPrice || product.price}</span>
          {product.discount > 0 && (
            <span className="original-price">${product.price}</span>
          )}
          {product.discount > 0 && (
            <span className="discount">-{product.discount}%</span>
          )}
        </div>
        
        <div className="description">
          <p>{product.description}</p>
        </div>
        
        <div className="specifications">
          <h3>Specifications</h3>
          {product.specifications.map((spec, index) => (
            <div key={index} className="spec">
              <strong>{spec.key}:</strong> <span>{spec.value}</span>
            </div>
          ))}
        </div>
        
        <div className="actions">
          <div className="quantity-selector">
            <label>Quantity:</label>
            <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
              {[...Array(10).keys()].map(num => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
          </div>
          
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;