import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import { Button, Container, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'

const Restaurants = () => {
    const {store, actions} = useContext(Context);
    return (
        <Container>
            <NavbarTop />
            <div>
                <h2 className='mx-auto my-3 text-center'> Bienvenido {"*Nombre de la persona"}</h2>
                <Row>
                    <Col md={{ size: 'auto'}} className='mt-4'>
                    <h2 className='my-2'>Lista de establecimientos:</h2>

                        <ListGroup className='my-4 md-auto' variant='flush'>
                                        {store.restaurantes.map((element, index)=>{
                                        return (<div className='col-12 p-0' key={index}>
                                            <ListGroup.Item className='md-auto my-1'>
                                                <Row>
                                                    <Col>                                                
                                                        <h3>{element.nombre}</h3>
                                                        <h4>Cantidad maxima de personas: {element.cantidad_maxima}</h4> 
                                                        <h4>Personas en lista de espera: {element.espera}</h4> 
                                                    </Col>
                                                    <Col xs lg="2" >
                                                        <Image className="card-img" src={"/restaurante"+index+".jpg"} rounded/>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            </div>
                                            )
                                        })}
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Restaurants