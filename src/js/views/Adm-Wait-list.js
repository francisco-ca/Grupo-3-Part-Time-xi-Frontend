import React, {useState} from 'react';
import NavbarTop from '../components/NavbarTop';
import {Button, Modal} from 'react-bootstrap';

const AdmWaitList = props => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal(!showModal)
    return (
        <>
            <NavbarTop />
            <div className='container p-4 text-center d-flex justify-content-center'>
                <div className='row  my-4'>
                    <div className='col'>
                        <h1 className='text-left'>
                            Nombre del restaurante
                        </h1>
                        <h4 className='my-3'>Numero de mesas disponibles: {0}</h4>
                        <form className='my-4' action='#' method='PUT' onSubmit={(e)=>{e.preventDefault();}}>{/* ruta en la api que maneje este form */}
                            <Button className='mx-3' variant="success" size="lg" type='submit' >Agregar</Button>
                            <Button className='mx-3' variant="danger" size="lg" type='submit' >Eliminar</Button>
                        </form>
                        <h4 className='my-3'>lista de espera: {5} personas</h4>
                        <form className='my-4' action='#' method='PUT' onSubmit={(e)=>{e.preventDefault();}}>{/* ruta en la api que maneje este form */}
                            <Button className='mx-3' variant="success" size="lg" type='submit' onClick={handleModal}>Agregar</Button>
                            <Button className='mx-3' variant="danger" size="lg" type='submit' >Eliminar</Button>
                        </form>

                        <Modal show={showModal} onHide={handleModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleModal}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                         </Modal>
                    </div>
                </div>
            </div>
        </>
        )
}

export default AdmWaitList;