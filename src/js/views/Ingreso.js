import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { Form, Button, Card, Container, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import '../estilos/inicio.css'
import Volver from "../components/Volver";

const Ingreso = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => { }, []);

    return (
        <Container>
            <div className="Cont">
                <div className="abs-center text-center">
                    <div className="container p-4 text-center d-flex justify-content-center" >
                        <Card style={{ width: '30rem' }} className="p-4 m-4 borde3 fontt">
                            {/* {JSON.stringify(store.persona)} */}
                            {!store.persona.login ?
                                <>
                                    <h3 className="py-2">Iniciar sesión</h3>
                                    <Form onSubmit={(e) => actions.loginPersona(e)}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Ingresa tu correo" name="correo" onChange={(e) => actions.onChangeUser(e)} value={store.persona.correo} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={(e) => actions.onChangeUser(e)} value={store.persona.contraseña} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            {/* <Form.Check type="checkbox" label="Recordar contraseña" /> */}
                                        </Form.Group>
                                        <Row>
                                            <Button className="mb-1 btn botone" variant="dark" type="submit">Iniciar sesión</Button>
                                        </Row>
                                        <Row><Volver /></Row>
                                        <Link to="/olvide_contraseña">
                                            <h5 className=" fontt mt-4" style={{ color: "white" }}>¿No recuerdas tu contraseña?</h5>
                                        </Link>
                                    </Form>
                                </>
                                :
                                <Redirect to="/restaurantes"></Redirect>
                            }
                        </Card>
                    </div>
                </div>
            </div>
        </Container>

    );
}

export default Ingreso