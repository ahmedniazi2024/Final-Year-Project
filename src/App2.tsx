import React from "react";
import "./styles.css";

function ConsumerVerify() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Verify Products</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="register">Register Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Authenticity Checker</h1>
          <p>Your Trustworthy Product Partner</p>
          <button className="scan-button">Start Scanning Now</button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Open the app and get started.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Scan the barcode on your product.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Review the verification results.</p>
          </div>
          <div className="step">
            <h3>Step 4</h3>
            <p>Provide feedback on your experience.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Stay Informed and Safe</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Easy Barcode Scanning</h3>
            <p>Use your camera to scan effortlessly.</p>
          </div>
          <div className="feature">
            <h3>Instant Verification</h3>
            <p>Get immediate results on authenticity.</p>
          </div>
          <div className="feature">
            <h3>AI-Powered Assistance</h3>
            <p>Ensuring accurate and reliable scans.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Alerts</h3>
            <p>Be notified instantly about counterfeit items.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>We're here to assist you with any inquiries.</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>CONTACT US</h2>
        <p>Email: info@verifyproducts.com</p>
        <p>Twitter: @VerifyProducts</p>
        <p>LinkedIn: linkedin.com/company/verifyproducts</p>
        <p>© 2024 Verify Products | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default ConsumerVerify;
