import React from "react";
import NavbarTop from '../components/NavbarTop'
import { Image, Row, Col, ListGroup, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
        <Container>
            <NavbarTop />
            <Row>
                <Col className="col-6">
                    <ListGroup>
                        <ListGroup.Item><Link to="/restaurantes">Elige tu restaurant/pub</Link></ListGroup.Item>
                        <ListGroup.Item><Link to="/lista_espera/:id">Anótate en la lista</Link></ListGroup.Item>
                    </ListGroup>

                </Col>
                <Col className="col-6 text-center">
                    <h4>¿Cuál es el panorama para hoy?</h4>
                    <p>Revisa la lista de restaurantes y elige uno:</p>
                    <Image src="bon-appetit.png" roundedCircle
                    style={{width: "400px", height: "400px"}}/>
                </Col>

            </Row>
            
            </Container>
        </>
    )
}

export default Dashboard
