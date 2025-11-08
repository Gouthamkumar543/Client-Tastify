import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const Navigate = useNavigate()
    const persist = localStorage.getItem("persist")
    const logOut = ()=>{
        localStorage.removeItem("persist")
        localStorage.removeItem("token")
        localStorage.removeItem("restaurantId")
        Navigate("/")
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Tasty-food</Navbar.Brand>
                    {persist === "true" ?
                        <Button variant='primary' onClick={logOut}>Logout</Button>
                        :
                        <Nav className="me">
                            <Nav.Link href="/signup">SignUp</Nav.Link>
                            <Nav.Link href="/login">LogIn</Nav.Link>
                        </Nav>}
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar