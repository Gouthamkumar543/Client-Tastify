import axios from 'axios'
import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const [loginDetails, setLoginDetails] = useState({})
    const [show, setShow] = useState(true)
    const Navigate = useNavigate()
    const closeModal = () => {
        setShow(false)
        Navigate("/")
    }
    const userDetails = (x) => {
        setLoginDetails({ ...loginDetails, [x.target.name]: x.target.value })
        // console.log(loginDetails);
    }
    const submitDetails = async (x) => {
        x.preventDefault()
        try {
            const response = await axios.post("https://server-tasty.onrender.com/admins/login", loginDetails)
            // console.log(response);
            alert("login Done")
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("persist", true)
            try {
                const adminResponse = await axios.get(`https://server-tasty.onrender.com/admins/${response.data.adminId}`)
                // console.log(adminResponse.data.restaurantId);
                if (adminResponse.status == 200) {
                    const restaurantId = adminResponse.data.restaurantId
                    localStorage.setItem("restaurantId", restaurantId)
                }
            } catch (error) {
                Navigate("/restaurant")
            }
            Navigate("/restaurant")
        } catch (error) {
            console.error(error);
            if (error.response) {
                alert("Invalid credentials")
            }
        }
    }
    return (
        <div>
            <Modal show={show} onHide={closeModal}>
                <Form onSubmit={submitDetails}>
                    <Modal.Header closeButton>
                        <Modal.Title>LogIn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="name@example.com" onChange={userDetails} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type='password' onChange={userDetails} required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={closeModal}>Close</Button>
                        <Button variant="primary" type='submit'>Login</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </div>
    )
}

export default LogIn