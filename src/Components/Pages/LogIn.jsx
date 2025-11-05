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
    const userDetails = (x)=>{
        setLoginDetails({...loginDetails,[x.target.name]:x.target.value})
        console.log(loginDetails);
        
    }
    const submitDetails = async (x) => {
        x.preventDefault()
        try {
            axios.post("https://server-tasty.onrender.com/admins/login",loginDetails)
            alert("login Done")
            Navigate("/")
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