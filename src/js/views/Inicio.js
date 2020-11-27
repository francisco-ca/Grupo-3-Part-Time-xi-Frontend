import React from 'react'
import { Context } from '../store/appContext';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'

const Inicio = () => {
    return (
        <>
            <NavbarTop />
            <div>
                <Row>
                    <Col className="col-6 mt-4">
                        <img src="/people.jpg" />
                    </Col>
                    <Col className="col-4 mr-4 mt-4 ml-auto">
                        <h1 className="text-center">Bienvenido a la app!</h1>
                        <p>
                            Accediendo a nuestra aplicación podrás agregarte a una lista de espera. Cuando sea
                            tu turno, te avisaremos por un mensaje a tu celular.
                        </p>
                            <li>Evitamos aglomeración de personas en la entrada</li>
                            <li>No tendrás que estár pendiente a que llegue tu turno </li>
                        <p className="mt-4">
                            <Button className="mr-4" variant="secondary">Regístrate. Es gratis</Button>
                            <Link to="/login"><Button variant="secondary">Inicia Sesión</Button></Link>
                        </p>
                            <Link to="/contraseña">
                                <p className="" style={{color: "darkblue"}}>¿No recuerdas tu contraseña?</p>
                            </Link>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default Inicio