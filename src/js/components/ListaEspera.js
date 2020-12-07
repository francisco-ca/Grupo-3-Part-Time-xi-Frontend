import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import NavbarTop from './NavbarTop';
import { Button, Card, Container, Jumbotron, Col, Row, Image } from 'react-bootstrap';
import "./listaespera.css"


const ListaEspera = (props) => {
    const { store, actions } = useContext(Context);
    const [inList, setInList] = useState(true);
console.log("props",props)

    useEffect(() => {

        actions.fetchRestaurante(props.match.params.id)

    }, [])


    return (
        <Container>
            <NavbarTop />
            <Jumbotron fluid className="pt-3 pb-3 text-center fondo " style={{ height: '55rem' }}>
                <Container >
                    <h1>{store.restaurante.nombre}</h1>
                    <hr></hr>
                    <Row >
                        <Col className="pb-2" md={{ size: 'auto' }}>

                            <p className='text-justify pt-2 pb-3 '>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>
                    
 <hr></hr>
                            <Image className="img" src="/restaurante1.jpg" rounded fluid />
                            <hr></hr>

                     <h3 className="pt-5">Mesas disponibles: {0}/{store.restaurante.cantidad_maxima}</h3>
                        </Col>
                        <Col md={6}>
                            <Card className='mx-auto p-3 mb-2 lista text-white text-left' style={{ width: 'auto', height:"45rem" }}>
                                <Card.Body>
                                    
                                    <Card.Title >
                                        <h3 className="text-center pt-5 pl-3">Lista de espera: {5}/{store.restaurante.capacidad_lista_espera} personas</h3>
                                    </Card.Title>
                                    <Card.Text >
                                        {(inList) ?
                                            "" : <h4>Tu lugar en la lista es: 3</h4>
                                        }
                                    </Card.Text>

                                    <form className='my-5 abajo ' action='#' method='PUT' onSubmit={(e) => { e.preventDefault(); }}>{/* ruta en la api que maneje este form */}
                                        <Button variant="primary " size="lg" type='submit' onClick={() => { setInList(!inList) }}/*que mande tipo put para modificar la lista */>{inList ? 'Anotate en la fila!' : 'Salir de la fila'}</Button>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>




        </Container>
    )



}

export default ListaEspera;

