import React, { useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../estilos/inicio.css'
import Volver from "../components/Volver";

const Registro = props => {
    const { store, actions } = useContext(Context);

    useEffect(() => { }, []);
    return (
        <div className="container">
            <div className="Cont">
                <div className="abs-center text-center">
                    {!store.persona.signup ?
                        <Form className="p-4 m-4 borde3 fontt" onSubmit={(e) => actions.onSubmitPersona(e)}>
                            <Form.Group controlId="username">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="SiempreHambriento123" name="usuario" onChange={(e) => actions.onChangeUser(e)} value={store.persona.usuario} />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Juanita" name="nombre" onChange={(e) => actions.onChangeUser(e)} value={store.persona.nombre} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Perez" name="apellido" onChange={(e) => actions.onChangeUser(e)} value={store.persona.apellido} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="telefono">
                                <Form.Label>Número de teléfono</Form.Label>
                                <Form.Control placeholder="Ej: +56 9 12345788" name="telefono" onChange={(e) => actions.onChangeUser(e)} value={store.persona.telefono} />
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ej: comensal@correo.com" name="correo" onChange={(e) => actions.onChangeUser(e)} value={store.persona.correo} />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={(e) => actions.onChangeUser(e)} value={store.persona.contraseña} />
                            </Form.Group>
                            <Button className="mb-1 btn botone" variant="dark" type="submit">
                                Registrarse </Button>
                            <Row><Volver /></Row>
                        </Form>
                        :
                        <Redirect to="/"></Redirect>
                    }
                </div>
            </div>
        </div>
    );
};
export default Registro