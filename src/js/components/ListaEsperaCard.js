import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import { Card, Button, Row, Col, Jumbotron, Image, Container } from 'react-bootstrap'



const ListaEsperaCard = (props) => {
    const { store, actions } = useContext(Context);
    const [inList, setInList] = useState(true);
    return (
        <Card className='mx-auto p-3 mb-2 bg-dark text-white' style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Header >
                    <h3>Mesas disponibles: {0}</h3>
                </Card.Header>
                <Card.Title className='my-4'>
                    <h3>Lista de espera: {5} personas</h3>
                </Card.Title>
                <Card.Text>
                    {(inList) ?
                        "" : <h4>Tu lugar en la lista es: 3</h4>
                    }
                </Card.Text>

                <form className='my-4' action='#' method='PUT' onSubmit={(e) => { e.preventDefault(); }}>{/* ruta en la api que maneje este form */}
                    <Button variant="primary" size="lg" type='submit' onClick={() => { setInList(!inList) }}/*que mande tipo put para modificar la lista */>{inList ? 'Anotate en la fila!' : 'Salir de la fila'}</Button>
                </form>
            </Card.Body>
        </Card>
    );
}

export default ListaEsperaCard 