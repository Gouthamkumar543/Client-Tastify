import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const SignUp = () => {
    const [signupDetails, setSignupDetails] = useState({})
    const [show, setShow] = useState(true)
    const Navigate = useNavigate()
    const closeModal = () => {
        setShow(false)
        Navigate("/")
    }
    const userDetails = (x) => {
        setSignupDetails({ ...signupDetails, [x.target.name]: x.target.value })
    }
    const submitDetails = async (x) => {
        x.preventDefault()
        const { username, email, password, confirmpassword } = signupDetails
        if (password !== confirmpassword) {
            alert("password dont match")
            return
        }
        try {
            axios.post("https://server-tasty.onrender.com/admins/signup", signupDetails)
            alert("signUp completed")
            Navigate("/login")
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <Modal show={show} onHide={closeModal}>
                <Form onSubmit={submitDetails}>
                    <Modal.Header closeButton>
                        <Modal.Title>SignUp</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='username' placeholder='example' onChange={userDetails} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="name@example.com" onChange={userDetails} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type='password' onChange={userDetails} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control name='confirmpassword' type='password' onChange={userDetails} required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={closeModal}>Close</Button>
                        <Button variant="primary" type='submit'>SignUp</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div >
    )
}

export default SignUp