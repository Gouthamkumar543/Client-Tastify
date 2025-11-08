import React from 'react'
import { Form, Button } from "react-bootstrap"

const ProductForm = () => {
    
    return (
        <div className='productDiv'>
            <Form className='productDetails'>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name='name' placeholder='type name here ....' required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' placeholder="example:- kukatpally    " required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' rows={3} as={'textarea'} placeholder="enter the product description ...." required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name='rating' placeholder='4.5' required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control name='image' type='file' required />
                </Form.Group>
                <Button variant="primary" type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default ProductForm