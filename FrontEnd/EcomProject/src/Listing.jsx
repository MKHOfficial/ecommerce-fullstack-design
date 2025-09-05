import { useState, useEffect } from 'react';
import Header from "./Header";
import ListingItems from "./ListingItems";
import "./Listing.css";
import Footer from "./Footer";
import { getProducts } from "../services/api";


export default function Listing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: 'createdAt',
    page: 1,
    limit: 12
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      
      if (filters.category) params.category = filters.category;
      if (filters.minPrice) params.price_gte = filters.minPrice;
      if (filters.maxPrice) params.price_lte = filters.maxPrice;
      if (filters.sort) params.sort = filters.sort;
      if (filters.page) params.page = filters.page;
      if (filters.limit) params.limit = filters.limit;

      const response = await getProducts(params);
      setProducts(response.data.data || response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
      page: 1 // Reset to first page when filters change
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({
      ...prev,
      page: newPage
    }));
    window.scrollTo(0, 0);
  };

  const displayPrice = (product) => {
    const currentPrice = product.discount > 0 
      ? product.price - (product.price * (product.discount / 100))
      : product.price;

    return (
      <>
        <span className="CurrentPrice" style={{
          fontWeight: 'bold',
          fontSize: '20px',
          marginRight: '8px',
          color: '#e94560'
        }}>
          ${currentPrice.toFixed(2)}
        </span>
        {product.discount > 0 && (
          <span className="OriginalPrice" style={{
            color: '#a0a0a0',
            textDecoration: 'line-through',
            fontSize: '18px',
          }}>
            ${product.price.toFixed(2)}
          </span>
        )}
      </>
    );
  };

  if (loading) {
    return (
      <div>
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="error-container">
          <p>{error}</p>
          <button onClick={fetchProducts} className="retry-btn">
            Try Again
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="listing-container">
        <div className="filters-sidebar">
          <h3>Filters</h3>
          
          <div className="filter-group">
            <label>Category</label>
            <select 
              value={filters.category} 
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Books">Books</option>
              <option value="Beauty">Beauty</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Sort By</label>
            <select 
              value={filters.sort} 
              onChange={(e) => handleFilterChange('sort', e.target.value)}
            >
              <option value="createdAt">Newest</option>
              <option value="price">Price: Low to High</option>
              <option value="-price">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
              <option value="-name">Name: Z to A</option>
              <option value="-ratings">Highest Rated</option>
            </select>
          </div>

          <button 
            onClick={() => setFilters({
              category: '',
              minPrice: '',
              maxPrice: '',
              sort: 'createdAt',
              page: 1,
              limit: 12
            })}
            className="clear-filters-btn"
          >
            Clear All Filters
          </button>
        </div>

        <div className="products-section">
          <div className="products-header">
            <h2>All Products</h2>
            <span className="products-count">
              {products.length} {products.length === 1 ? 'product' : 'products'} found
            </span>
          </div>

          <div className="ListingTab">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="ListingItem">
                  <ListingItems 
                    url={product.images && product.images[0] ? product.images[0].url : ''}
                    price={displayPrice(product)}
                    name={product.name}
                    des={product.description}
                    productId={product._id}
                  />
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
                <button 
                  onClick={() => setFilters({
                    category: '',
                    minPrice: '',
                    maxPrice: '',
                    sort: 'createdAt',
                    page: 1,
                    limit: 12
                  })}
                  className="reset-filters-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination would go here if your backend supports it */}
          {/* <div className="pagination">
            <button disabled={filters.page === 1} onClick={() => handlePageChange(filters.page - 1)}>
              Previous
            </button>
            <span>Page {filters.page}</span>
            <button onClick={() => handlePageChange(filters.page + 1)}>
              Next
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}