import React, { useState } from 'react'
import RestaurantForm from './RestaurantForm'
import ProductForm from './ProductForm'

const Restaurant = () => {
  const [restaurantForm, setRestaurantForm] = useState(false)
  const [productForm, setProductForm] = useState(false)
  const restaurantFormOpen = () => {
    setRestaurantForm(true)
    setProductForm(false)
  }
  const productFormOpen = () => {
    setProductForm(true)
    setRestaurantForm(false)
  }
  return (
    <div className='restaurant'>
      <div className="leftSide-restaurant">
        <span onClick={restaurantFormOpen}>Add restaurant</span>
        <span onClick={productFormOpen}>Add Product</span>
        <span>View Products</span>
        <span>Restaurant Details</span>
      </div>
      <div className="rightSide-restaurant">
        {restaurantForm && <RestaurantForm />}
        {productForm && <ProductForm />}
      </div>
    </div>
  )
}

export default Restaurant