// FaceCare.js

import React, { useState, useEffect } from 'react';
import '../styles/FaceCare.css';

function FaceCare() {
  const [products, setProducts] = useState([]);
  const desiredProductIds = [2, 4, 6, 14, 7, 8, 9]; // Example IDs, replace with your desired IDs

  useEffect(() => {
    fetch('http://localhost:3000/beautyProducts')
      .then((res) => res.json())
      .then((json) => {
        // Filter products based on desired IDs
        const filteredProducts = json.filter((product) =>
          desiredProductIds.includes(product.id)
        );

        setProducts(filteredProducts);
      });
  }, []);

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to Cart!`);
    // You can add more logic here for handling the cart state or making an API call to add the product to the cart.
  };

  return (
    <div className='face-care-container'>
      <h1>Face Care Products</h1>
      <div className='face-care-list'>
        {products.map((product) => (
          <div className='face-care-card' key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceCare;
