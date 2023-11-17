// Home.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Fetch only three featured products from your API
    fetch("http://localhost:3000/beautyProducts?_limit=3")
      .then((res) => res.json())
      .then((json) => setFeaturedProducts(json));
  }, []);

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Candies Beautiful Beauty Shop</h1>
        <p>
          Discover a world of beauty and elegance at our exquisite beauty shop.
          We believe in making every customer feel extraordinary by offering a
          range of high-quality beauty products and services tailored to your
          unique style and preferences.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/online-cosmetics-store-concept-woman-hands-holding-smartphone-with-app-beauty-goods-internet-shopping-girl-choose-cosmetic-makeup-body-care-products-virtual-shop-cartoon-illustration_107791-3866.jpg"
          alt="Beauty Shop"
          className="beauty-shop-image"
        />
      </div>
      <div className="cta-section">
        <p>Explore our collection and experience the essence of beauty.</p>
        <Link to="/products">
          <button className="explore-button">Explore All Products</button>
        </Link>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products">
          {featuredProducts.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
