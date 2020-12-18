import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext';
import { Button, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const RestaurantCard = (props) => {
    const [login, setLogin] = useState(null)
    const { store, actions } = useContext(Context);
    const element = props.element
    const index=props.index
    
 console.log("element", element)
 console.log("index",index)
    console.log("id", props.id)
    useEffect(() => {
        // if (!sessionStorage.getItem("login")) {
            // history.push("/ingreso");
        // }
        setLogin(JSON.parse(sessionStorage.getItem("login")))

        console.log("valor de login-----", login)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    let perso = login != null ?JSON.parse(sessionStorage.getItem('login')):""
    const roles_id = login != null ?perso.data.usuario.roles_id:""
    
    
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
                    <Button variant="primary" size="lg" >
                        
                        <Link to={`/lista_espera/${props.id}`} className="text-white">
                            Unirte a la lista
                            </Link>
                    </Button>
                </Col>
            { roles_id !== 3?
                <Col className="my-auto" md='2'>
                    <Button variant="primary" size="lg" >
                        <Link to={`/restaurantes/${props.id}/editar`} className="text-white">
                            Editar restaurante
                            </Link>
                    </Button>
                </Col>
                :''
            }
            { roles_id === 1?
                <Col className="my-auto" md='2'>
                    <Button variant="danger" size="lg" onClick={() => actions.deleteRestaurant(index, props.id)}>Eliminar</Button>
                </Col>
                :''
            }
                <Col xs lg="2" >
                    <Image className="card-img" src={"default-restaurant.png"} rounded />
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default RestaurantCard