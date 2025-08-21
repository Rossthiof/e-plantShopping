import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import CartPage from './CartPage.jsx';
import './App.css';
import AboutUs from './AboutUs.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="landing-page">
              <div className="background-image"></div>
              <div className="content">
                <div className="landing_content">
                  <h1>Welcome To Paradise Nursery</h1>
                  <div className="divider"></div>
                  <p>Where Green Meets Serenity</p>
                  <button 
                    className="get-started-button" 
                    onClick={() => window.location.href = '/plants'}>
                    Get Started
                  </button>
                </div>
                <div className="aboutus_container"><AboutUs/></div>
              </div>
            </div>
          } 
        />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
