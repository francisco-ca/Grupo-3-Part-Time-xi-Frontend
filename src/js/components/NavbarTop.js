import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext';
import {Link, Redirect} from 'react-router-dom'
import {Navbar, Nav, Button} from 'react-bootstrap'

import '../estilos/inicio.css'

const NavbarTop = (props) => {
    const { store, actions } = useContext(Context);

    const id_session = JSON.parse(sessionStorage.getItem('login'))
    const id_rol = id_session.data.usuario.roles_id

    useEffect(() => { 
        actions.fetchMenu(id_rol);
    }, []);

    return (
        
        <Navbar className="navbarlindo" variant="dark" expand="lg">
            <Navbar.Brand>
                {/* <Link to="/"> */}
                    <img 
                        className="ml-4 mr-2"
                        style={{width:"100px"}}
                        src="/4wait.png"
                        alt='brand'
                    />   
                {/* </Link> */}
                <span>Bienvenido</span> 
                {/* {JSON.stringify(store.menu)} */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-4"> 
                    {
                        store.menu.map((item, index) => (
                            <Link key={index} className= "nav-link" to={item.ruta_pagina}>{item.nombre_pagina}</Link>
                        ))

                    }   
                    {/* <Button className= "nav-link" onClick={(e)=> actions.cierraSesion(e)} ><Redirect to="/">Cerrar sesion</Redirect></Button> */}
                </Nav>  
                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarTop