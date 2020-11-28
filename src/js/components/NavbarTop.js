import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const NavbarTop = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    <img 
                        className="ml-4 mr-2"
                        style={{width:"60px"}}
                        src="/dinner-time.png"
                        alt='brand'
                    />   
                </Link>
                <span>Bienvenido</span> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-4">
                    <Link className= "nav-link" to="/registro">Regístrate</Link>
                    <Link className= "nav-link" to="/login">Inicia sesión</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarTop