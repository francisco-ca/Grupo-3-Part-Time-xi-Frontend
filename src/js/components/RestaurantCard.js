import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { Button, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const RestaurantCard = (props) => {
    const { store, actions } = useContext(Context);
    const element = props.element
    const index=props.index
    const id = props.id
    
 console.log("element", element)
 console.log("index",index)
    console.log("id", props.id)
  
    
    return (
        <ListGroup.Item className='md-auto my-1'>
            <Row>
                <Col>
                    <h3>{element.nombre}</h3>
                    <h4>Número de mesas: {element.cantidad_maxima}</h4>
                    <h4>Personas en lista de espera: 1/{element.capacidad_lista_espera}</h4>
                    <h4>Dirección: {element.direccion}</h4>
                </Col>
                <Col className="my-auto" md='2'>
                    <Button variant="primary" size="lg">
                        <Link to={`/lista_espera/${props.id}`} className="text-white">
                            Unirte a la lista
                            </Link>
                    </Button>
                </Col>
                <Col className="my-auto" md='2'>
                    <Button variant="danger" size="lg" onClick={() => actions.deleteRestaurant(index, props.id)}>Eliminar</Button>
                </Col>
                <Col xs lg="2" >
                    <Image className="card-img" src={"default-restaurant.png"} rounded />
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default RestaurantCard