import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"

const RestaurantForm = () => {
    const [restaurantDetails, setRestaurantDetails] = useState({})
    const [file, setFile] = useState(null)
    const token = localStorage.getItem("token")
    const formDetails = (x) => {
        setRestaurantDetails({ ...restaurantDetails, [x.target.name]: x.target.value })
        // console.log(restaurantDetails);
    }
    const imageFile = (x) => {
        // console.log(x.target.files[0]);
        const img = x.target.files[0]
        setFile(img)
    }
    const submitDetails = async (x) => {
        x.preventDefault()
        const { restaurantname, location, category, type } = restaurantDetails
        const formData = new FormData()
        formData.append("restaurantname", restaurantname)
        formData.append("location", location)
        formData.append("category", category)
        formData.append("type", type)
        formData.append("image", file)
        try {
            await axios.post("https://server-tasty.onrender.com/restaurants", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    token: `${token}`
                }
            })
            alert("Done ")
        } catch (error) {
            console.error(error);
            if (error.response) {
                alert("adding failed")
            }
        }
    }
    return (
        <div className='restaurantDiv'>
            <Form className='restaurantDetails' onSubmit={submitDetails}>
                <Form.Group className="mb-3">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control name='restaurantname' placeholder='type name here ....' onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name='location' placeholder="example:- kukatpally" onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name='category' placeholder='North Indian, South Indian, Chinese etc...' onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Control name='type' placeholder='Veg, Non-Veg, Icecream etc...' onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Restaurant Logo</Form.Label>
                    <Form.Control name='image' onChange={imageFile} type='file' required />
                </Form.Group>
                <Button variant="primary" type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default RestaurantForm