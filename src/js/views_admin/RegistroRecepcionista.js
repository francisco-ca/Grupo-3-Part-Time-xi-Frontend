import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Form, Col, Button } from 'react-bootstrap';

const RegistroRecepcionista = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => { }, []);

    return (
        <div className="container">
            {JSON.stringify(store.persona)}
            {!store.persona.signup_recepcionista ?
            <>
                <Form onSubmit={(e) => actions.registroRecepcionista(e)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={(e) => actions.onChangeUser(e)} value={store.persona.nombre} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" name="apellido" onChange={(e) => actions.onChangeUser(e)} value={store.persona.apellido} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="telefono">
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control placeholder="Ej: +56 9 12345788" name="telefono" onChange={(e) => actions.onChangeUser(e)} value={store.persona.telefono} />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" name="correo" onChange={(e) => actions.onChangeUser(e)} value={store.persona.correo} />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={(e) => actions.onChangeUser(e)} value={store.persona.contraseña} />
                    </Form.Group>
                    <Button variant="primary" type="submit" > Registrar Recepcionista </Button>
                </Form>
                <Button className="mt-2" variant="warning" type="submit" > Editar Recepcionista </Button><br></br>
                <Button className="mt-2" variant="danger" type="submit" > Eliminar Recepcionista</Button>

                </>
                :
                console.log("Recepcionita agregado")
            }
        </div>
    )
}

export default RegistroRecepcionista
