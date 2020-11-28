import React, { useContext, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NavbarTop from '../components/NavbarTop'

const AddRestaurant = props => {
    const { store, actions } = useContext(Context);

    useEffect(() => { }, []);
    return (
        <div className="container">
            <NavbarTop />
            <Form onSubmit={(e)=>actions.onSubmitRest(e)}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre de Restaurant/Pub</Form.Label>
                    <Form.Control type="text" placeholder="La manito de d10s" name="nombre" onChange={(e) => actions.onChangeRest(e)} value={store.restaurants.nombre}/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formDirección">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" placeholder="Campari street" name="direccion" onChange={(e) => actions.onChangeRest(e)} value={store.restaurants.direccion} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formTelefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="+569 76878786" name="telefono" onChange={(e) => actions.onChangeRest(e)}value={store.restaurants.telefono} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="mesas">
                    <Form.Label>Número de mesas</Form.Label>
                    <Form.Control type="text" placeholder="20" name="numero_mesas" onChange={(e) => actions.onChangeRest(e)} value={store.restaurants.numero_mesas}/>
                </Form.Group>

                <Form.Group controlId="formCapListaespera">
                    <Form.Label>Capacidad lista de espera</Form.Label>
                    <Form.Control type="text" placeholder="20" name="cap_lista" onChange={(e) => actions.onChangeRest(e)} value={store.restaurants.cap_lista} />
                </Form.Group>

               

                <Button variant="primary" type="submit">
                    Registrar Restaurant
  </Button>
            </Form>
        </div>
    );
};


export default AddRestaurant