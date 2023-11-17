import React, { useState, useEffect } from 'react';

import '../styles/Products.css';

function Products() {
  // declare a new state variable called "products"
  const [products, setProducts] = useState([]);
  // fetch data from the API
  useEffect(() => {
    fetch('http://localhost:3000/beautyProducts')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className='product-container'>
      <h1>Products</h1>
      <div className='product-list'>
        {products.map((product) => (
          <div className='product-card' key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
