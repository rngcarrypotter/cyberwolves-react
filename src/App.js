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
          <li><a href="/">Home</a></li>
          <li><a href="/configurator">Configurator</a></li>
          <li><a href="/repair">PC & Phone Repair</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Build Your Perfect PC</h1>
            <p>Select components and configure your dream PC with ease.</p>
            <button className="cta-button" onClick={() => window.location.href = '/configurator'}>Get Started</button>
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
                <img src="c
