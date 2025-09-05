// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Header from './Header';
import Home from './Home';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './Cart';
import Listing from './Listing';
import ProductDetail from './components/ProductDetail';
import Profile from './components/Profile';
import Footer from './Footer';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route 
            path="/cart" 
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;