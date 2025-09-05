// src/Header.jsx
import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (user) {
      setProfileDropdown(!profileDropdown);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    setProfileDropdown(false);
    navigate('/');
  };

  return (
    <div>
      <header className='Header'>
        <nav className='navbar'>
          <div className="header-left">
            <Link to="/" className="logo">Ecommerce</Link>
          </div>
          
          <span className='HeadSearch'>
            <input className="Search" type="search" placeholder='Search here'/>
            <select name="select category">
              <option value="">All Category</option>
              <option value="">Electronics</option>
              <option value="">Books</option>
            </select>
            <button className='SearchBtn'>Search</button>
          </span>
          
          <ul className='HeaderList'>
            <li>
              <a href="#" onClick={handleProfileClick}>
                <i className="fa-solid fa-user"></i>
                {user ? user.name : 'Profile'}
              </a>
              {profileDropdown && user && (
                <div className="profile-dropdown">
                  <Link to="/profile">My Profile</Link>
                  <Link to="/orders">My Orders</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </li>
            <li><a href="#"><i className="fa-solid fa-message"></i>Messages</a></li>
            <li><a href="#"><i className="fa-solid fa-heart"></i>Wishlist</a></li>
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>Cart
                {user && <span className="cart-count">3</span>}
              </Link>
            </li>
          </ul>
        </nav>
        
        <hr />
        
        <ul className='AfterSearchList'>
          <li>
            <select name="Categories" id="Category">
              <option value="">All Categories</option>
              <option value="">Automobiles</option>
              <option value="">Cloth and wear</option>
              <option value="">Home interiors</option>
              <option value="">Computer and tech</option>
              <option value="">Tools, equipmenets</option>
              <option value="">Sports and outdoor</option>
              <option value="">Machinery tools</option>
              <option value="">More category</option>
            </select>
          </li>
          <li><a href="#">Hot offers</a></li>
          <li><a href="#">Gift boxes</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Menu Items</a></li>
          <li className='Help'>
            <a href="#">Help <i className="fa-solid fa-caret-down"></i></a>
            <div className='HelpContent'>
              <a href="#">Contact us</a>
              <a href="#">Email</a>
            </div>
          </li>
        </ul>
      </header>
      <hr />
    </div>
  );
}