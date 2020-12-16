import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import NavbarTop from './NavbarTop';
import { Button, Card, Container, Jumbotron, Col, Row, Image, Form } from 'react-bootstrap';
import "./listaespera.css"
import {FiChevronsUp} from "react-icons/fi";


const ListaEspera = (props) => {
    const { store, actions } = useContext(Context);
    const [inList, setInList] = useState(true);
    
    const perso = JSON.parse(sessionStorage.getItem('login'))
    const persona = perso.data.usuario.id_persona

    console.log("prueba", persona)
    useEffect(() => {

        actions.fetchRestaurante(props.match.params.id)
        actions.fetchListasEspera(props.match.params.id)
        actions.getListaEspera(props.match.params.id)


    }, [])
    const listapers = store.listapersonas
    // const mapPers = listapers.map((item, i) => <li key={i}>{listapers[i].nombre}</li>)
    const listaesp = store.getlistaespera
    
    // const mapList = listaesp.map((item, i) => listaesp[i].id_lista)
    const hora = "11:32"


    console.log("props", props)
    console.log("listapersonas", listapers)
    // console.log("mapers", mapPers)
    console.log("listaesp", listaesp)
    // console.log("maplist", listaesp.map((item, i) => listaesp[i].id_lista)[0])
    // console.log("listasss", personasL)




    return (
        <Container>
            <NavbarTop />
            <Jumbotron fluid className="pt-3 pb-3 text-center fondo " style={{ height: 'auto' }}>
                <Container onLoad={()=>{actions.fetchListasEspera(props.match.params.id)
                                        actions.getListaEspera(props.match.params.id)}}>
                    <h1 className="font">{store.restaurante.nombre}</h1>
                    <hr></hr>
                    <Row >
                        <Col className="pt-2 pb-2" md={{ size: 'auto' }}>

                            <p className='text-justify borde font p-3 '>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>

                            <hr></hr>
                            <Image className="borde" src="/restaurante1.jpg" fluid />
                            <hr></hr>

                            <h3 className=" p-3 mesas font ">Mesas disponibles: {0}/{store.restaurante.cantidad_maxima}</h3>
                        </Col>
                        <Col md={6}>
                            <Card className='mx-auto p-3 mb-2 lista text-white text-left' style={{ width: 'auto', height: "65rem" }}>
                                <Card.Body>
                                    
                                    <Card.Title >
                                        <h3 className="text-center fontlistatit pt-2 pl-3">Lista de espera: {listapers.length}/{store.restaurante.capacidad_lista_espera} </h3>
                                    </Card.Title>

                                    <Card.Text className="fontlista" >
                                        {(inList) ?
                                            "" : <ol>{listapers.map((item, i) => <li key={i}>{listapers[i].nombre}</li>)}</ol>
                                        }
                                    </Card.Text>
                                        <Form className="text-center" onSubmit={(e) => {actions.onSubmitpersonaenLista(listaesp.map((item, i) => listaesp[i].id_lista)[0],persona,hora)}}>
                                    
                                        <Button type="submit" variant="dark" className="boton">Añadir a la Lista</Button>
                                    </Form>
                                       <Form className="text-center" onSubmit={(e) => {actions.deletePersonaEnLista(listaesp.map((item, i) => listaesp[i].id_lista)[0],persona)}}>
                                    
                                        <Button type="submit" variant="dark" className="boton">Salir de la Lista</Button>
                                    </Form>
                                    <form className='my-5 abajo text-center fontlista' action='#' method='PUT' onSubmit={(e) => { e.preventDefault(); }}>{/* ruta en la api que maneje este form */}
                                        <Button variant="dark" className="boton" size="lg" type='submit' onClick={() => { setInList(!inList) }}/*que mande tipo put para modificar la lista */>{inList ? 'Ver fila' : "X"}</Button>
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

