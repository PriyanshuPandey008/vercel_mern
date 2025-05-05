import React from 'react'
import { useState } from 'react'

const products = () => {
  return (
    <div>
      <h1>products</h1>
      <div className="product">
        <div className="product-image">
          <img src="" alt="" />
        </div>
        <div className="product-details">
          <h2>Product Name</h2>
          <p>Product Description</p>
          <p>Price: $XX.XX</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="product">
        <div className="product-image">
          <img src="" alt="" />
        </div>
        <div className="product-details">
          <h2>Product Name</h2>
          <p>Product Description</p>
          <p>Price: $XX.XX</p>
          <button>Add to Cart</button>
        </div>
</div>
    </div>
  )
}

export default products