import React from 'react'
import { Context } from '../store/appContext';
import { Form, Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'

const Login = () => {
    return (
        <>
            <NavbarTop />
            <div className="container p-4 text-center d-flex justify-content-center" >
                <Card style={{ width: '30rem' }} className="p-4 m-4">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Ingresa tu email" name="email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" name="password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Recordar contraseña" />
                        </Form.Group>
                        <Button className="mb-4" block size="lg" variant="secondary" type="submit">Iniciar sesión</Button>
                        <Link to="/contraseña" className="mt-4">Recupera tu contraseña</Link>
                    </Form>
                </Card>
            </div>
        </>
    );
}

export default Login