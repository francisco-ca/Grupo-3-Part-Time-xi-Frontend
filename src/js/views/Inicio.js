import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'
import { Image } from 'react-bootstrap';

const Inicio = () => {
    //const persona_data=JSON.parse(sessionStorage.getItem('persona_data'))
    //console.log(persona_data.success)

    return (
        <Container>
            <NavbarTop />
            <div>
                <Row>
                    <Col  md={{ size: 'auto'}} >
                        <Image  src="/people.jpg" rounded fluid/>
                    </Col>
                    <Col md={{ size: 'auto'}}>
                        <h1 className="text-left">Bienvenido a la app!</h1>
                        <p className="text-justify">
                            Accediendo a nuestra aplicación podrás agregarte a una lista de espera. Cuando sea
                            tu turno, te avisaremos por un mensaje a tu celular.
                        </p>
                            <li>Evitamos aglomeración de personas en la entrada</li>
                            <li>No tendrás que estár pendiente a que llegue tu turno </li>
                        <p className="mt-4">
                            <Link to="/registro" className="btn btn-secondary">Regístrate. Es gratis </Link>&nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/ingreso" className="btn btn-secondary">Inicia Sesión</Link>
                        </p>
                            <Link to="/contraseña">
                                <p className="" style={{color: "darkblue"}}>¿No recuerdas tu contraseña?</p>
                            </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Inicio