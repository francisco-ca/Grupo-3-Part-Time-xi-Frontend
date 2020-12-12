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
                <p className="ml-4">Así, evitaremos aglomeración de personas en la entrada y no
                tendrás que estár pendiente a que llegue tu turno!</p>
            </Row>
            <Row className="text-center m-2 imagen_central">
                <Col md={{ size: 'auto' }} >
                    <Image 
                    style={{width: "1100px", height: "250px"}}
                    src="/mesas-color.jpg" rounded fluid />
                </Col>
            </Row>
<<<<<<< HEAD
            
            <Row className="mb-2 ml-4">
=======
            <Row className="m-2">
>>>>>>> 0214e45a14d865073c321c9422b0615f5f430074
                <Link to="/ingreso" className="btn btn-primary">Inicia Sesión</Link>
            </Row>
            <Row className="mb-2 ml-4">
                <Link to="/registro" className="btn btn-primary">Regístrate. Es gratis </Link>
            </Row >
            <div>
<<<<<<< HEAD
            <Link to="/contraseña">
                <p className="ml-4" style={{ color: "gray" }}>¿No recuerdas tu contraseña?</p>
=======
            <Link to="/olvide_contraseña">
                <p className="" style={{ color: "gray" }}>¿No recuerdas tu contraseña?</p>
>>>>>>> 0214e45a14d865073c321c9422b0615f5f430074
            </Link>
            </div>
        </Container>
    );
}

export default Inicio