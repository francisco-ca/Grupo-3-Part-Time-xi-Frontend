import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../estilos/inicio.css'
import { Link } from 'react-router-dom'

const Inicio = () => {
    //const persona_data=JSON.parse(sessionStorage.getItem('persona_data'))
    //console.log(persona_data.success)

    return (
     <>
        <Container  >
            <div className="Cont">
            <div className= "abs-center">
            <div className= "fond borde2" >
                <h1 className="text-center m-4">Bienvenido a la app!</h1>
                <Row className="m-4">
                    <Col md={{ size: 'auto' }} >
                        <Image src="/mesas-mar.jpg" className="bordes m-2" rounded fluid />
                    </Col>
                    <Col className="text-center"  md={{ size: 'auto' } }>
                            <div className=" p-2 text-justify fontt bordes m-2">
                        <p >
                            Accediendo a nuestra aplicación podrás agregarte a una lista de espera. Cuando sea
                            tu turno, te avisaremos por un mensaje a tu celular.
                        </p>
                        <li>Evitamos aglomeración de personas en la entrada</li>
                        <li>No tendrás que estár pendiente a que llegue tu turno </li>
                            </div>
                        <Row className="m-4">
                            <Col className="p-0 mt-2 mr-1">
                            <Link to="/ingreso" className="btn  fontt botone">Inicia Sesión</Link>
                        </Col>
                        <Col className="p-0 ml-1 mt-2">
                            <Link to="/registro" className="btn fontt botone text-center">Regístrate</Link>
                        </Col>
                        </Row >
                        <Link to="/olvide_contraseña">
                            <h5 className=" fontt" style={{ color: "white" }}>¿No recuerdas tu contraseña?</h5>
                        </Link>
                    </Col>
                </Row>
            </div>
      </div>
      </div>

        </Container>
          </>
        // <Container>
        //     {/*  */}
        //     <h2 className="text-center mt-4" style={{ color: 'black' }}>Bienvenido a la Lista de espera</h2>
        //     <Row className="text-center">
        //         <h4>
        //             Accediendo a nuestra aplicación podrás agregarte a una lista de espera. Cuando sea
        //             tu turno, te avisaremos a tu celular.
        //         </h4>
        //         <p className="text-center">Así, evitaremos aglomeración de personas en la entrada y no
        //         tendrás que estár pendiente a que llegue tu turno!</p>
        //     </Row>
        //     <Row className="text-center m-2 imagen_central">
        //         <Col md={{ size: 'auto' }} >
        //             <Image src="/mesas-color.jpg" rounded fluid />
        //         </Col>
        //     </Row>
        //     <Row className="m-2">
        //         <Link to="/ingreso" className="btn btn-primary">Inicia Sesión</Link>
        //     </Row>
        //     <Row className="m-2">
        //         <Link to="/registro" className="btn btn-primary">Regístrate. Es gratis </Link>
        //     </Row >
        //     <div>
        //         <Link to="/olvide_contraseña">
        //             <p className="" style={{ color: "gray" }}>¿No recuerdas tu contraseña?</p>
        //         </Link>
        //     </div>
        // </Container>
    );
}

export default Inicio