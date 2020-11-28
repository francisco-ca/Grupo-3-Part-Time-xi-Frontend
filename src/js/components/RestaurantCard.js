import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import { Button, Row, Col, ListGroup, Image } from 'react-bootstrap'


const RestaurantCard = ( props ) => {
    const {store, actions} = useContext(Context);
    const element = props.element
    const index = props.index
    return (
            <ListGroup.Item className='md-auto my-1'>
                <Row>
                    <Col>                                                
                        <h3>{element.nombre}</h3>
                        <h4>Cantidad maxima de personas: {element.cantidad_maxima}</h4> 
                        <h4>Personas en lista de espera: {element.espera}</h4> 
                    </Col>
                    <Col className="my-auto" md='2'>
                        <Button variant="danger" size="lg" onClick={()=>actions.deleteRestaurant(index)}>Eliminar</Button>
                    </Col>
                    <Col xs lg="2" >
                        <Image className="card-img" src={"/restaurante"+index+".jpg"} rounded/>
                    </Col>
                </Row>
            </ListGroup.Item>            
    );
}

export default RestaurantCard