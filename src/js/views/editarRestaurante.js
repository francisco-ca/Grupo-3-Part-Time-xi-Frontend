import React, { useContext, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NavbarTop from '../components/NavbarTop'
import {useParams} from 'react-router'
import '../estilos/inicio.css'
import Volver from "../components/Volver";




const EditarRestaurante = props => {
    const { store, actions } = useContext(Context);
    let {id} = useParams();
    let valorId =  Number(id)+1
    useEffect(() => { 
        actions.fetchRestaurante(valorId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container">
             <div className="Cont">
            <NavbarTop />
            <div className= "abs-center text-center">
            
            <Form className="p-4 m-4 borde3 fontt" onSubmit={(e)=>actions.putRestaurante(e, valorId)}>
                <h1 className='text-center my-2'>Editando Restaurante</h1>
                <Form.Group controlId="name">
                    <Form.Label>Nombre de Restaurant/Pub</Form.Label>
                    <Form.Control type="text" placeholder="La manito de d10s" name="nombre" onChange={(e) => actions.onChangeRest(e)} defaultValue={store.restaurante.nombre}/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formDirección">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" placeholder="Campari street" name="direccion" onChange={(e) => actions.onChangeRest(e)} defaultValue={store.restaurante.direccion} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTelefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="+569 76878786" name="telefono" onChange={(e) => actions.onChangeRest(e)}defaultValue={store.restaurante.telefono} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="mesas">
                    <Form.Label>Número de mesas</Form.Label>
                    <Form.Control type="text" placeholder="20" name="numero_mesas" onChange={(e) => actions.onChangeRest(e)} defaultValue={store.restaurante.cantidad_maxima}/>
                </Form.Group>

                <Form.Group controlId="formCapListaespera">
                    <Form.Label>Capacidad lista de espera</Form.Label>
                    <Form.Control type="text" placeholder="20" name="capacidad_lista_espera" onChange={(e) => actions.onChangeRest(e)} defaultValue={store.restaurante.capacidad_lista_espera} />
                </Form.Group>
                <Volver/>
                <Button className="btn botone"  variant="dark" type="submit">
                    Editar
                </Button>
            </Form>
        </div>
        </div>
        </div>
    );
};
export default EditarRestaurante