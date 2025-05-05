import React from 'react'
import {usestate} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react'
import Home from './assets/homepage/home'
import Products from './assets/products/products'
import Productid from './assets/productid/productid'
import Signup from './assets/Signup/Signup'
import Signin from './assets/Signin/Signin'

const App = () => {
  const [products,setproducts]=usestate([Name,Price,Discoumt,category])
  return (
    <div>
      <h1>Basic Product Inventory</h1>
      <p>Inventory Management system for products </p>
      <Router>
        <Routes>
          <Route>
            <route path='/' element={<Home />} />
            {/* <route path='/create-product' elements={< Name />} /> */}
            <route path='/signup' element={<Signup />} />
            <route path='/signin' element={<Signin />} />
            {/* <route path='/products' element={<Products />} /> */}
            {/* <route path='/products/:id' element={<Productid />} /> */}
            <route path='/products' element={<Products />} />
            <route path='/products/:id' element={<Productid />} />
          </Route>
        </Routes>
      </Router>
      



    </div>
  )
}

export default App