import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Tasty-food</Navbar.Brand>
                    <Nav className="me">
                        <Nav.Link href="/signup">SignUp</Nav.Link>
                        <Nav.Link href="/login">LogIn</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar