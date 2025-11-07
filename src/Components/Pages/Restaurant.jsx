import React from 'react'
import RestaurantForm from './RestaurantForm'

const Restaurant = () => {

  return (
    <div className='restaurant'>
        <div className="leftSide-restaurant">
            <span>Add restaurant</span>
            <span>Add Product</span>
            <span>View Products</span>
            <span>Restaurant Details</span>
        </div>
        <div className="rightSide-restaurant">
            <RestaurantForm />
        </div>
    </div>
  )
}

export default Restaurant