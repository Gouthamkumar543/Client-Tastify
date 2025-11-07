import React from 'react'
import { Form,Button } from "react-bootstrap"

const RestaurantForm = () => {
    return (
        <div>
            <Form className='restaurantDetails'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='username' placeholder='example' required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type='password' required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirmpassword' type='password' required />
                </Form.Group>
                <Button variant="danger">Close</Button>
                <Button variant="primary" type='submit'>SignUp</Button>
            </Form>
        </div>
    )
}

export default RestaurantForm