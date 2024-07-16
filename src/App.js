import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles.css';
import Configurator from './Configurator';

function App() {
  return (
    <Router basename="/cyberwolves-react">
      <div className="App">
        <header>
          <div className="banner"></div>
        </header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/configurator">Configurator</Link></li>
            <li><Link to="/repair">PC & Phone Repair</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/configurator">
              <Configurator />
            </Route>
            {/* Add other routes here */}
          </Switch>
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2024 PC Assembly and Configuration. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Build Your Perfect PC</h1>
          <p>Select components and configure your dream PC with ease.</p>
          <Link to="/configurator" className="cta-button">Get Started</Link>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VFShXKZtzfw"
            frameBorder="0"
            allowFullScreen
            title="PC Assembly Video"
          ></iframe>
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
    </>
  );
}

export default App;
