import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="banner"></div>
      </header>
      <nav className="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="configurator.html">Configurator</a></li>
          <li><a href="repair.html">PC & Phone Repair</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Build Your Perfect PC</h1>
            <p>Select components and configure your dream PC with ease.</p>
            <button className="cta-button" onClick={() => window.location.href = 'configurator.html'}>Get Started</button>
          </div>
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VFShXKZtzfw" frameborder="0" allowfullscreen></iframe>
          </div>
        </section>
        <section className="reviews">
          <div className="container">
            <h2>What Our Customers Say</h2>
            <div className="review-list">
              <div className="review">
                <img src="customer1.jpg" alt="Customer 1" className="review-img" />
                <p>"Amazing service! My PC runs like a dream!"</p>
                <div className="stars">★★★★★</div>
                <span>- Alex R.</span>
              </div>
              <div className="review">
                <img src="customer2.jpg" alt="Customer 2" className="review-img" />
                <p>"Great experience, I built my custom PC with ease."</p>
                <div className="stars">★★★★★</div>
                <span>- Maria L.</span>
              </div>
              <div className="review">
                <img src="customer3.jpg" alt="Customer 3" className="review-img" />
                <p>"Highly recommend! Fantastic customer support."</p>
                <div className="stars">★★★★★</div>
                <span>- John D.</span>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="feature-list">
              <div className="feature">
                <h3>Custom Builds</h3>
                <p>Build a PC that matches your needs and budget.</p>
              </div>
              <div className="feature">
                <h3>High Quality</h3>
                <p>We use only the best components for maximum performance.</p>
              </div>
              <div className="feature">
                <h3>Expert Support</h3>
                <p>Get help from our experienced support team.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 PC Assembly and Configuration. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
