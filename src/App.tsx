import React from "react";
import "./styles.css";

function App() {
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
          <h1>Unmasking Counterfeits with Blockchain</h1>
          <p>Empowering consumers and manufacturers alike.</p>
          <button className="scan-button">Scan Your Product</button>
        </div>
        <div className="hero-image">
          <img
            src="https://img.freepik.com/free-photo/cosmetics-composition-with-cremes_23-2148549113.jpg"
            alt="Blockchain Security"
          />
        </div>
      </section>

      {/* Authenticity Section */}
      <section className="authenticity">
        <h2>Discover Authenticity</h2>
        <p>Ensuring Trust in Every Purchase</p>
        <div className="auth-cards">
          <div className="auth-card">
            <div className="auth-content">
              <h3>Your Shield Against Fraud</h3>
              <h2>Protect Your Brand and Customers</h2>
              <p>Identify Genuine Products Instantly</p>
              <a href="#">Join the Movement</a>
            </div>
            <div className="auth-image">
              <img
                src="https://img.freepik.com/free-photo/cosmetics-composition-with-cremes_23-2148549113.jpg"
                alt="Product Verification"
              />
              <div className="overlay"></div>
            </div>
          </div>
          <div className="auth-card">
            <div className="auth-content">
              <h3>Transparency at Your Fingertips</h3>
              <h2>Revolutionizing Product Verification</h2>
              <p>Stay Ahead of Counterfeits</p>
              <a href="#">Get Started Today</a>
            </div>
            <div className="auth-image">
              <img
                src="https://img.freepik.com/free-photo/cosmetics-composition-with-cremes_23-2148549113.jpg"
                alt="Counterfeit Protection"
              />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-content">
          <div className="how-image">
            <img
              src="https://img.freepik.com/free-photo/cosmetics-composition-with-cremes_23-2148549113.jpg"
              alt="Verification Process"
            />
          </div>
          <div className="how-text">
            <h2>How It Works</h2>
            <p>Simple steps to verify products.</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="how-features">
          <div className="feature">
            <h3>Real-Time Verification</h3>
            <p>
              Instantly confirm product authenticity with our scanning
              technology.
            </p>
          </div>
          <div className="feature">
            <h3>Blockchain Transparency</h3>
            <p>
              Every transaction is recorded on an immutable ledger for trust.
            </p>
          </div>
          <div className="feature">
            <h3>AI Fraud Detection</h3>
            <p>Advanced algorithms identify and flag suspicious products.</p>
          </div>
        </div>
      </section>

      {/* New Section: Join the Fight Against Fakes */}
      <section className="fight-fakes">
        <div className="fight-content">
          <div className="fight-text">
            <h1>Join the Fight Against Fakes</h1>
            <p>Empower yourself with knowledge and tools.</p>
            <button className="scan-now">Start Scanning Now</button>
          </div>
          <div className="fight-image">
            <img
              src="https://img.freepik.com/free-photo/cosmetics-composition-with-cremes_23-2148549113.jpg"
              alt="Fight Fakes"
            />
          </div>
        </div>
        <div className="collaborate">
          <h2>Let's Collaborate</h2>
          <p>Together, we can create a safer marketplace for everyone.</p>
        </div>
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

export default App;
