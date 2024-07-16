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
          <p>Sel
