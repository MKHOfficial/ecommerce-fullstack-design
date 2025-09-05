import { Link } from "react-router-dom";
import "./Auth.css"; // import shared CSS

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" className="auth-input" />
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />

          <button type="button" className="auth-button signup-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-text">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
