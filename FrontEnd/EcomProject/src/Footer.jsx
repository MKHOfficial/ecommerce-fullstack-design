import "./Footer.css"
export default function Footer(){


    return(
              <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <h3>Brand</h3>
            <p>Best information about the company goes here but now lorem ipsum is</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
              <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Find store</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
         
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Money Refund</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>For users</h3>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">My Orders</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Get app</h3>
            <div className="app-download">
              <button className="app-btn">
                <i className="fab fa-apple"></i>
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="app-btn">
                <i className="fab fa-google-play"></i>
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>© 2023 Ecommerce. All rights reserved.</p>
          </div>
        </div>
      </footer>

    )
}