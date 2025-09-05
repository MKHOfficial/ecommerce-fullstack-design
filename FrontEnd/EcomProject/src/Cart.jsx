// In your Cart.jsx
import { useState, useEffect } from 'react';
import { getCart, removeFromCart, updateCartItem, applyCoupon } from '../services/api';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [couponCode, setCouponCode] = useState('');
  
  useEffect(() => {
    fetchCart();
  }, []);
  
  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleRemoveItem = async (itemId) => {
    try {
      await removeFromCart(itemId);
      fetchCart(); // Refresh cart data
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };
  
  const handleApplyCoupon = async () => {
    try {
      await applyCoupon(couponCode);
      fetchCart(); // Refresh cart data
    } catch (error) {
      console.error('Error applying coupon:', error);
    }
  };
  
  // ... rest of your component
}