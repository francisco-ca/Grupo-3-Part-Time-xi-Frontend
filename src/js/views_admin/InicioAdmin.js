import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'


const InicioAdmin = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => { }, []);

    return (
        <div className="container mt-5" style={{ width: '30rem' }}>
            <h1 className="text-center m-4">Bienvenido</h1>
            <Row className="container m-2 text-center d-flex justify-content-center" >
                <Link className="btn btn-primary" style={{ width: "30rem", height: "3rem" }} to="/ingreso">Ingresa a tu cuenta</Link>
            </Row>
            <Row className="container m-2 text-center d-flex justify-content-center" >
                <Link className="btn btn-primary" style={{ width: "30rem", height: "3rem" }} to="/registro_admin">Registra un nuevo administrador</Link>
            </Row>
        </div>
    )
}

export default InicioAdmin
