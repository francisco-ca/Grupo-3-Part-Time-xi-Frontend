import React, {useState} from 'react';
import NavbarTop from '../components/NavbarTop';
import {Button, Modal, Card, Container} from 'react-bootstrap';
import '../estilos/inicio.css'
import Volver from '../components/Volver'
import { useHistory } from 'react-router-dom'


const AdmListaEspera = props => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal(!showModal)
    const history = useHistory();

    return (
        <Container>
            <NavbarTop history={history}/>
            <div className='container p-4 text-center d-flex justify-content-center'>
                <div className='row  my-4'>
                    <div className='col'>
                    <Card className='mx-auto' style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Header >
                                <h1 className='text-left'> Nombre del restaurante </h1>
                                </Card.Header>
                                <Card.Title className='my-4'>
                                    <h4 className='my-3'>Numero de mesas disponibles: {0}</h4>
                                </Card.Title>
                                <Card.Text>
                                    <form className='my-4' action='#' method='PUT' onSubmit={(e)=>{e.preventDefault();}}>{/* ruta en la api que maneje este form */}
                                        <Button className='mx-3' variant="danger" size="lg" type='submit' >Eliminar</Button>
                                        <Button className='mx-3' variant="success" size="lg" type='submit' >Agregar</Button>
                                    </form>
                                </Card.Text>
                                <Card.Title className='my-4'>
                                    <h4 className='my-3'>lista de espera: {5} personas</h4>                                </Card.Title>
                                <Card.Text>
                                    <form className='my-4' action='#' method='PUT' onSubmit={(e)=>{e.preventDefault();}}>{/* ruta en la api que maneje este form */}
                                        <Button className='mx-3' variant="danger" size="lg" type='submit' >Eliminar</Button>
                                        <Button className='mx-3' variant="success" size="lg" type='submit' onClick={handleModal}>Agregar</Button>
                                    </form>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Modal show={showModal} onHide={handleModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Indique los datos de la persona</Modal.Title>
                            </Modal.Header>
                            <form action='#' method='PUT' onSubmit={(e)=>{e.preventDefault();}}>
                                <Modal.Body>
                                    <div className="form-group">
                                        <label for="inputName">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Nombre"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail">Email</label>
                                        <input type="tel" class="form-control" id="inputPhone" placeholder="Numero de telefono"/>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className='mx-3' variant="danger" size="lg"  onClick={handleModal}>Cancelar</Button>
                                    <Button className='mx-3' variant="success" size="lg" type='submit' onClick={handleModal}>Agregar</Button>
                                </Modal.Footer>
                            </form>
                         </Modal>
                    </div>
                </div>
            </div>
            <Volver/>
        </Container>
        )
}

export default AdmListaEspera;