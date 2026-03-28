import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-branding">
          <p className="site-tag">Smart Picks Store</p>
          <h1>Multi-Page Website</h1>
        </div>
        <p className="site-subtitle">Explore products, learn about us, and connect with our team.</p>
      </header>

      <nav className="main-nav">
        <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Contact Us
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Products
        </NavLink>
      </nav>

      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
