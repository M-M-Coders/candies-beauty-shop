// Products.js

import React, { useState, useEffect } from 'react';
import Search from './Search';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data from the API
  useEffect(() => {
    fetch('http://localhost:3000/beautyProducts')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle "Add to Cart" button click
  const handleAddToCart = (productName, productPrice) => {
    alert(`Added ${productName} to Cart! Price: ${productPrice}`);
    // You can add more logic here for handling the cart state or making an API call to add the product to the cart.
  };

  return (
    <div className='product-container'>
      <h1>Products</h1>
      <Search onSearch={handleSearch} />
      <div className='product-list'>
        {filteredProducts.map((product) => (
          <div className='product-card' key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product.name, product.price)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
