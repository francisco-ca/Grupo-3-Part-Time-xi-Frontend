import React, { useContext, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NavbarTop from '../components/NavbarTop'

const SignUp = props => {
    const { store, actions } = useContext(Context);

    useEffect(() => { }, []);
    return (
        <div className="container">
            <NavbarTop />
            <Form onSubmit={(e)=>actions.onSubmitPersona(e)}>
                <Form.Group controlId="username">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="text" placeholder="SiempreHambriento123" name="username" onChange={(e) => actions.onChangeUser(e)} value={store.persona.username}/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Juanita" name="name" onChange={(e) => actions.onChangeUser(e)} value={store.persona.name} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Perez" name="last_name" onChange={(e) => actions.onChangeUser(e)}value={store.persona.last_name} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="telefono">
                    <Form.Label>Número de teléfono</Form.Label>
                    <Form.Control placeholder="Ej: +56 9 12345788" name="telefono" onChange={(e) => actions.onChangeUser(e)} value={store.persona.telefono}/>
                </Form.Group>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ej: comensal@correo.com" name="correo" onChange={(e) => actions.onChangeUser(e)} value={store.persona.correo} />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" name="password" onChange={(e) => actions.onChangeUser(e)} value={store.persona.password} />
                </Form.Group>




                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Recibir notificación cuando sea mi turno" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrarse
  </Button>
            </Form>
        </div>
    );
};


export default SignUp