import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { Button, Container, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'
import Volver from "../components/Volver";
import '../estilos/inicio.css'
import { useHistory } from 'react-router-dom'

const Planes = () => {

    const { store, actions } = useContext(Context);
  

    return (<>
        <Container>
            <div className="Cont">

        

                <div className="abs-center text-center">
                    <div className="p-4 m-4 borde3">
                        <h2 className='mx-auto my-3 text-center '> Planes</h2>
                        <Row>
                            <Col>
                                <Table  className="fonttabla2" striped bordered>
                                    <thead >
                                        <tr>
                                            
                                            <th>Plan</th>
                                            <th>Descripción</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                            <td>Simple</td>
                                            <td>Lista de espera + Descripción restaurant/pub + Imagen representativa </td>
                                            <td>50.000 pesos mensuales</td>
                                        </tr>
                                        <tr>
                                            
                                            <td>Plus</td>
                                            <td>Lista de espera + Descripción restaurant/pub + Imagen representativa + Imagenes de productos + link con menú digitalizado</td>
                                            <td>75.000 pesos mensuales</td>
                                        </tr>
                                        <tr>
                                            
                                            <td>Premium</td>
                                            <td>Lista de espera + Descripción restaurant/pub + Imagen representativa + Imagenes de productos + link con menú digitalizado + link para ordenar y pagar productos para retiro en local</td>
                                            <td>125.000 pesos mensuales</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Row className="m-2"><p>*Todos nuestros planes incluyen atención técnica</p></Row>
                                <Row className="m-4"><h5>Si desea contratar nuestros servicios o tienes dudas e inquietudes, contáctenos vía e-mail:  <strong>contacto@4wait.com</strong> </h5></Row>
                                <Row><Volver /></Row>
                            </Col>

                        </Row>

                    </div>



                </div>



            </div>
        </Container>
    </>);
}


export default Planes