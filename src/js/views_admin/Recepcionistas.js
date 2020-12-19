import React, { useContext, useEffect} from 'react'
import { Context } from '../store/appContext';
import { Button, Container, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop'
import Volver from "../components/Volver";
import '../estilos/inicio.css'

const Recepcionistas = () => {
    //const history = useHistory();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getRecepcionistas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        <Container>
            <div className="Cont">
                
            <NavbarTop />
       
            <div className="abs-center text-center">
            <div className="p-4 m-4 borde3 fontt">
                <h2 className='mx-auto my-3 text-center '> Lista de Recepcionistas</h2>
                <Row>
                    <Col>
                        <Table className="fonttabla" responsive="sm" >
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Telefono</th>
                                    <th>Correo</th>
                                    <th>Restaurante</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.recepcionistas.length > 0 && store.recepcionistas.map((element, index) => {
                                    return (<>
                                        <tr>
                                            <td>{element.nombre}</td>
                                            <td>{element.apellido}</td>
                                            <td>{element.telefono}</td>
                                            <td>{element.correo}</td>
                                            <td>PiscoSour</td>
                                            <td>
                                                <Link className="mb-4 btn botone" variant="dark" to={`/recepcionistas/${element.id_persona}/editar`} >
                                                    Editar
                                                    </Link>
                                            </td>
                                            <td><Button className="botoneEliminar" variant="danger" size="lg" onClick={() => actions.deleteRecepcionista(index, element.id_persona)}>
                                                Eliminar
                                            </Button></td>
                                        </tr>
                                    </>
                                    )
                                })}
                            </tbody>
                        </Table>
                       <Row><Volver/></Row>
                    </Col>
                     
                </Row>
                
            </div>
            
            
             
            </div>
            
       
        
        </div>
        </Container>
    </>);
}


export default Recepcionistas