// BodyCare.js

import React, { useEffect, useState } from 'react';
import '../styles/BodyCare.css';

function BodyCare() {
  // Define variables
  const [products, setProducts] = useState([]);
  const desiredProductIds = [ 15, 16]; // Replace with your desired product IDs

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
  }, [desiredProductIds]); // Run useEffect whenever desiredProductIds changes

  //handle add to cart
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to Cart!`);
    // You can add more logic here for handling the cart state or making an API call to add the product to the cart.
  };

  return (
    <div className='body-care-container'>
      <h1>Body Care Products</h1>
      <div className='body-care-list'>
        {products.map((product) => (
          <div className='body-care-card' key={product.id}>
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

export default BodyCare;
