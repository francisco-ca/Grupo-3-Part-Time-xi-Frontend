import React from 'react'
import { Context } from '../store/appContext';
import { Form, Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'

const RecuperaContraseña = () => {
    return (
        <>
            <NavbarTop />
            <div className="container p-4 text-center d-flex justify-content-center" >
                <Card style={{ width: '30rem' }} className="p-4 m-4">
                    <h3>¿Olvidaste tu contraseña?</h3>
                    <p>Introduce la dirección de correo electrónico con la que accedes a la app. En unos minutos recibirás 
                        un email para reestablecer tu contraseña </p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Ingresa tu email" name="email" />
                        </Form.Group>
                    </Form>
                    <Button className="mb-4" block size="lg" variant="secondary" type="submit">Enviar email</Button>
                </Card>
            </div>
        </>
    );
}

export default RecuperaContraseña