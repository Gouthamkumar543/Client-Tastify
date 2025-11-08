import axios from 'axios'
import React, { use, useState } from 'react'
import { Form, Button } from "react-bootstrap"

const ProductForm = () => {
    const [productDetails, setProductDetails] = useState({})
    const [file, setFile] = useState(null)
    const restaurantId = localStorage.getItem("restaurantId")
    const formDetails = (x) => {
        setProductDetails({ ...productDetails, [x.target.name]: x.target.value })
        // console.log(productDetails);
    }
    const imageFile = (x) => {
        const img = x.target.files[0]
        setFile(img)
    }
    // console.log(file);
    const submitProduct = async (x) => {
        x.preventDefault()
        const { name, price, description, rating } = productDetails
        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("rating", rating)
        formData.append("image", file)
        try {
            const response = await axios.post(`https://server-tasty.onrender.com/products/${restaurantId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            alert("Done")
        } catch (error) {
            console.log(error);
            if (error.response) {
                alert("failed to add")
            }
        }
    }
    return (
        <div className='productDiv'>
            <Form className='productDetails' onSubmit={submitProduct}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name='name' placeholder='type name here ....' onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' placeholder="example:- 54rs" onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' rows={3} as={'textarea'} placeholder="enter the product description ...." onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name='rating' placeholder='4.5' onChange={formDetails} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control name='image' type='file' onChange={imageFile} required />
                </Form.Group>
                <Button variant="primary" type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default ProductForm