import React, {useState} from 'react';
import NavbarTop from '../components/NavbarTop';
import {Button, Card, Container} from 'react-bootstrap';

const WaitList = props => {
    const [inList, setInList ] = useState(true);

    return (
        <Container>
            <NavbarTop />
            <div className='container p-4 text-center d-flex justify-content-center'>
                <div className='row  my-4'>
                    <div className='col'>
                        <h1 className='text-left'>
                            Nombre del restaurante {/* numero de mesas proveniente del flux*/}
                        </h1>
                        <div className='row'>
                            <p className='text-justify col-6 '>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                                qui dolorem ipsum quia dolor sit amet, consectetur
                            </p>
                            <img className='col- 6' alt='Imagen del restaurante'>

                            </img>
                        </div>
                        <Card className='mx-auto' style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Header >
                                    <h3>Numero de mesas disponibles: {0}</h3>
                                </Card.Header>
                                <Card.Title className='my-4'>
                                    <h3>lista de espera: {5} personas</h3>
                                </Card.Title>
                                <Card.Text>
                                { (inList) ?
                                "":<h4>Tu lugar en la lista es: 3</h4>
                                  }
                                </Card.Text>

                                <form className='my-4' action='#' method='PUT' onSubmit={(e)=>{e.preventDefault();}}>{/* ruta en la api que maneje este form */}
                                 <Button variant="primary" size="lg" type='submit' onClick={()=>{setInList(!inList)}}/*que mande tipo put para modificar la lista */>{ inList?'Anotate en la fila!':'Salir de la fila'}</Button>
                                </form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
        )
    
    
    
}

export default WaitList;
