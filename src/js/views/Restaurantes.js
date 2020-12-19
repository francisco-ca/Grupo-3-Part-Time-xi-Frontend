import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext';
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'
import RestaurantCard from '../components/RestaurantCard'
import '../estilos/inicio.css'

const Restaurantes = () => {
    const [valor, setValor] = useState(null)
    const history = useHistory();
    const { store, actions } = useContext(Context);
    // const rest= store.restaurantes
    // const indice = rest.map((item,i) =>rest[i])

    useEffect(() => {
        if (!sessionStorage.getItem("login")) {
            history.push("/ingreso");
        }
        setValor(JSON.parse(sessionStorage.getItem("login")))
        actions.fetchRestaurantes()
        actions.fetchListaEspera()
        actions.getListasEspera()

        console.log("valor-----", valor)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let perso = valor != null ? JSON.parse(sessionStorage.getItem('login')) : ""
    const persona = valor != null ? perso.data.usuario.nombre : ""
    const roles_id = valor != null ? perso.data.usuario.roles_id : ""


    return (<>
        <Container>
            <div className="Cont">
                <NavbarTop history= {history} />
                <div className="abs-center fontt">
                    <div>
                        <h2 className='mx-auto my-3 text-center font-italic font-weight-bold'> Bienvenido "{persona}"</h2>
                        {/* <EnvioMsj></EnvioMsj> */}
                        <Row>
                            <Col>
                                <Row className='d-flex justify-content-between'>
                                    <Col xs lg="9" className='mt-4'>
                                        <h2 className='my-2 font-weight-bold'>Restaurantes:</h2>
                                    </Col>
                                    {(roles_id === 1) ?
                                        <Col xs lg="3" className='mt-4 '>
                                            <Button className="botone3" variant="dark" size="lg">
                                                <Link className="text-white" to='/nuevo_restaurante'>Agregar restaurante</Link>
                                            </Button>
                                        </Col>
                                        :
                                        ''}
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
                                    })}
                                </ListGroup>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    </>);
}


export default Restaurantes