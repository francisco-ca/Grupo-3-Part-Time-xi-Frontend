import React, { useContext, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { Context } from "../store/appContext";
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export const SignUp = props => {
    // const { store, actions } = useContext(Context);

    useEffect(() => { }, []);
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="username">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control  placeholder="SiempreHambriento123" />
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control  placeholder="Juanita" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control  placeholder="Perez" />
                    </Form.Group>
                </Form.Row>
               

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control placeholder="Av. principal 999" />
                </Form.Group>

                <Form.Group controlId="telefono">
                    <Form.Label>Número de teléfono</Form.Label>
                    <Form.Control placeholder="Ej: +56 9 12345788" />
                </Form.Group>
                 
                    <Form.Group  controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ej: comensal@correo.com" />
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
               
                  

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Comuna</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Región</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Región del Biobío  </option>
                            <option>Región Metropolitana  </option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Código Postal</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="rol">
                    <Form.Label>Rol</Form.Label>
                    <Form.Control as="select" defaultValue="Elige tu rol...">
                            <option>Elige tu rol...</option>
                            <option>Usuario </option>
                            <option>Recepcionista  </option>
                            <option>Super Administrador  </option>
                        </Form.Control>
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