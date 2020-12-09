import React, { useContext, useEffect} from "react";
import { Context } from '../store/appContext';
import { Form, Button, Card, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'


const Ingreso = () => {
    const { store, actions } = useContext(Context);


    return (
        <Container>
            <NavbarTop />
            <div className="container p-4 text-center d-flex justify-content-center" >
                <Card style={{ width: '30rem' }} className="p-4 m-4">
                    <Form onSubmit={(e)=>actions.loginPersona(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Ingresa tu correo" name="correo" onChange={(e) => actions.onChangeUser(e)} value={store.persona.correo} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword"> 
                            <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={(e) => actions.onChangeUser(e)} value={store.persona.contraseña} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Recordar contraseña" />
                        </Form.Group>
                        <Button className="mb-4" block size="lg" variant="secondary" type="submit">Iniciar sesión</Button>
                        <Link to="/contraseña" className="mt-4">Recupera tu contraseña</Link>
                    </Form>
                </Card>
            </div>
       </Container>
    );
}

export default Ingreso