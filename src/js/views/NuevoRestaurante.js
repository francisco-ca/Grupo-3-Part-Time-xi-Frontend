import React, { useContext, useEffect } from "react";
import { Form, Row } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NavbarTop from '../components/NavbarTop'
import '../estilos/inicio.css'
import Volver from '../components/Volver'
import { useHistory } from 'react-router-dom'


const NuevoRestaurante = props => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    useEffect(() => { }, []);
    return (
        <div className="container">
            <div className="Cont">
                <NavbarTop history={history}/>
                <div className="abs-center">
                    <Form className="borde3 fontt p-4 m-4" onSubmit={(e) => {actions.onSubmitRest(e);history.goBack()}}>
                        <h1 className='text-center my-2'>Nuevo Restaurante</h1>

                        <Form.Group controlId="name">
                            <Form.Label>Nombre de Restaurante/Pub</Form.Label>
                            <Form.Control type="text" placeholder="La manito de d10s" name="nombre" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.nombre} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formDirección">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" placeholder="calle Campari" name="direccion" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.direccion} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formTelefono">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="text" placeholder="+569 76878786" name="telefono" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.telefono} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="mesas">
                            <Form.Label>Número de mesas</Form.Label>
                            <Form.Control type="text" placeholder="20" name="numero_mesas" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.numero_mesas} />
                        </Form.Group>

                        <Form.Group controlId="formCapListaespera">
                            <Form.Label>Capacidad lista de espera</Form.Label>
                            <Form.Control type="text" placeholder="20" name="capacidad_lista_espera" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.cap_lista} />
                        </Form.Group>
                        <Form.Group controlId="formDescipcion">
                            <Form.Label>Descripción Restaurante</Form.Label>
                            <Form.Control type="text" placeholder="Descripción máximo 1000 caracteres" name="descripcion_rest" onChange={(e) => actions.onChangeRest(e)} value={store.restaurante.descripcion_rest} />
                        </Form.Group>
                        <Row className="text-center">
                        <Button className='btn botone ' variant="dark" type="submit">
                            Registrar Restaurant
                        </Button>
                        </Row>
                        <Row><Volver/></Row>
                    </Form>
                </div>
            </div>
        </div>
    );
};


export default NuevoRestaurante
