import React, { useEffect} from "react";
import { Link } from 'react-router-dom'
import {Row} from 'react-bootstrap'
import '../estilos/inicio.css'


const InicioAdmin = () => {
    useEffect(() => { }, []);

    return (
        <div className="container" style={{ width: '30rem' }}>
            <div className="Cont">
            <div className= "abs-center">
                <div className="p-4 m-4 borde3 fontt">
            <h1 className="text-center m-4">Bienvenido</h1>
            <Row  >
                <Link className="mb-4 btn botone"  variant="dark" style={{ width: '20rem' }} to="/ingreso">Ingresa a tu cuenta</Link>
            </Row>
            <Row  >
                <Link className="mb-4 btn botone"  variant="dark" style={{ width: '20rem' }} to="/registro_admin">Registra un nuevo administrador</Link>
            </Row>
            </div>
            </div>
            </div>
        </div>
    )
}

export default InicioAdmin
