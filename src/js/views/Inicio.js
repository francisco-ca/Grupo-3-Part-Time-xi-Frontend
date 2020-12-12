import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../estilos/inicio.css'
import { Link } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'

const Inicio = () => {
    //const persona_data=JSON.parse(sessionStorage.getItem('persona_data'))
    //console.log(persona_data.success)

    return (
        // <Container>
        //     {/* <NavbarTop /> */}
        //     <div>
        //         <h1 className="text-center m-4">Bienvenido a la app!</h1>
        //         <Row className="m-4">
        //             <Col md={{ size: 'auto' }} >
        //                 <Image src="/people.jpg" rounded fluid />
        //             </Col>
        //             <Col md={{ size: 'auto' }}>

        //                 <p className="text-justify">
        //                     Accediendo a nuestra aplicación podrás agregarte a una lista de espera. Cuando sea
        //                     tu turno, te avisaremos por un mensaje a tu celular.
        //                 </p>
        //                 <li>Evitamos aglomeración de personas en la entrada</li>
        //                 <li>No tendrás que estár pendiente a que llegue tu turno </li>

        //                 <Row className="m-4">
        //                     <Link to="/ingreso" className="btn btn-secondary">Inicia Sesión</Link>
        //                 </Row>
        //                 <Row className="m-4">
        //                     <Link to="/registro" className="btn btn-secondary">Regístrate. Es gratis </Link>
        //                 </Row >
        //                 <Link to="/contraseña">
        //                     <p className="" style={{ color: "darkblue" }}>¿No recuerdas tu contraseña?</p>
        //                 </Link>
        //             </Col>
        //         </Row>
        //     </div>

        // </Container>
        <Container>
            <NavbarTop />
            <h2 className="text-center mt-4" style={{ color: 'black' }}>Bienvenido a la Lista de espera</h2>
            <Row className="text-center">
                <h4>
                    Accediendo a nuestra aplicación podrás agregarte a una lista de espera. Cuando sea
                    tu turno, te avisaremos a tu celular.
                </h4>
                <p className="text-center">Así, evitaremos aglomeración de personas en la entrada y no
                tendrás que estár pendiente a que llegue tu turno!</p>
            </Row>
            <Row className="text-center m-2 imagen_central">
                <Col md={{ size: 'auto' }} >
                    <Image src="/mesas-color.jpg" rounded fluid />
                </Col>
            </Row>
            <Row className="m-2">
                <Link to="/ingreso" className="btn btn-primary">Inicia Sesión</Link>
            </Row>
            <Row className="m-2">
                <Link to="/registro" className="btn btn-primary">Regístrate. Es gratis </Link>
            </Row >
            <div>
            <Link to="/olvide_contraseña">
                <p className="" style={{ color: "gray" }}>¿No recuerdas tu contraseña?</p>
            </Link>
            </div>
        </Container>
    );
}

export default Inicio