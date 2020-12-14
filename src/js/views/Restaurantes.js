import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext';
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'
import RestaurantCard from '../components/RestaurantCard'
import { Redirect } from 'react-router-dom'


const Restaurantes = () => {
    const [valor, setValor] = useState(null)
    // let valor = JSON.parse(sessionStorage.getItem("login"))
    const history = useHistory();
    const { store, actions } = useContext(Context);
    // const rest= store.restaurantes
    // const indice = rest.map((item,i) =>rest[i])

    // console.log("prueba",indice)
    useEffect(() => {
        if (!sessionStorage.getItem("login")) {
            history.push("/ingreso");
            // console.log("llll", sessionStorage.getItem("login"))
        }
        setValor(JSON.parse(sessionStorage.getItem("login")))
        actions.fetchRestaurantes()
        actions.fetchListaEspera()
        actions.getListasEspera()

        // eslint-disable-next-line react-hooks/exhaustive-deps
         console.log("valor-----", valor)
    }, [])
    let perso = JSON.parse(sessionStorage.getItem('login'))
    const persona = perso.data.usuario.nombre
                   
   
    return (<>


        <Container>
            <NavbarTop />
            <div>
                <h2 className='mx-auto my-3 text-center'> Bienvenido {persona}</h2>
                <Row>
                    <Col>
                        <Row className='d-flex justify-content-between'>

                            <Col xs lg="10" className='mt-4'>
                                <h2 className='my-2'>Restaurantes disponibles:</h2>
                            </Col>
                            <Col xs lg="2" className='mt-4 '>
                                <Button variant="primary" size="lg">
                                    <Link className="text-white" to='/nuevo_restaurante'>Agregar restaurante</Link>
                                </Button>
                            </Col>
                        </Row>
                        <ListGroup className='my-4 md-auto' variant='flush'>
                            {store.restaurantes.length > 0 && store.restaurantes.map((element, index) => {
                                return (
                                    <RestaurantCard
                                        element={element}
                                        index={index}
                                        id={element.id_restaurante}
                                        key={index}>
                                    </RestaurantCard>
                                    
                                )
                                console.log(element.id_restaurante)
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    </>);
}


export default Restaurantes