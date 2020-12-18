import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { Button, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../estilos/inicio.css'
import { BsWrench} from "react-icons/bs";



const RestaurantCard = (props) => {
    const { store, actions } = useContext(Context);
    const element = props.element
    const index=props.index
    const id = props.id
    
 console.log("element", element)
 console.log("index",index)
    console.log("id", props.id)
  
    
    return (
        <ListGroup.Item className='md-auto my-1 borde4 text-center'>
            <Row>
                <Col className="fontt2 text-center" >
                    <h2 className="font-italic">"{element.nombre}"</h2>
                    <h5 >N° Mesas: {element.numero_mesas}</h5>
                    <h5>Lista de espera: 1/{element.capacidad_lista_espera}</h5>
                    <h5>{element.direccion}</h5>
                </Col>
                <Col className="my-auto" md='3'>
                    
                        
                        <Link to={`/lista_espera/${props.id}`}  variant="dark" className="text-white botoneUnirseLista">
                            Unirte a la lista
                            </Link>
                    
                </Col>
                <Col className="my-auto" md='1'>
                <Link to = {`/restaurantes/${props.id}/editar`}   size="lg" ><BsWrench className="editar"></BsWrench></Link>
                </Col>
                <Col className="my-auto" md='2'>
                    <Button className="botoneEliminar" variant="danger" size="lg" onClick={() => actions.deleteRestaurant(index, props.id)}>Eliminar</Button>
                </Col>
                <Col xs lg="3" >
                    <Image className="card-img imagen" src={"restaurante0.jpg"} rounded />
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default RestaurantCard