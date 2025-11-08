import React, { useState } from 'react'
import RestaurantForm from './RestaurantForm'
import ProductForm from './ProductForm'
import Products from './Products'

const Restaurant = () => {
  const [restaurantForm, setRestaurantForm] = useState(false)
  const [productForm, setProductForm] = useState(false)
  const [products, setproducts] = useState(false)
  const restaurantId = localStorage.getItem("restaurantId")
  const restaurantFormOpen = () => {
    setRestaurantForm(true)
    setProductForm(false)
    setproducts(false)
  }
  const productFormOpen = () => {
    setProductForm(true)
    setRestaurantForm(false)
    setproducts(false)
  }
  const getProducts = () => {
    setproducts(true)
    setProductForm(false)
    setRestaurantForm(false)
  }
  return (
    <div className='restaurant'>
      <div className="leftSide-restaurant">
        {restaurantId ?
          <>
            <span onClick={productFormOpen}>Add Product</span>
            <span onClick={getProducts}>View Products</span>
            <span>Restaurant Details</span>
          </>
          :
          <>
            <span onClick={restaurantFormOpen}>Add restaurant</span>
            <span onClick={productFormOpen}>Add Product</span>
            <span onClick={getProducts}>View Products</span>
            <span>Restaurant Details</span>
          </>

        }
      </div>
      <div className="rightSide-restaurant">
        {restaurantForm && <RestaurantForm />}
        {productForm && <ProductForm />}
        {products && <Products />}
      </div>
    </div>
  )
}

export default Restaurant