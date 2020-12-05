import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Button, Row, Col, Jumbotron, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ListaEsperaCard from "./ListaEsperaCard"


const ResumenRest = (props) => {
    const { store, actions } = useContext(Context);
    const element = props.element
    const index = props.index
    return (
        <Jumbotron fluid className="pt-3 pb-3 text-center" >
            <Container >
                <h1>Nombre del restaurante{/* numero de mesas proveniente del flux*/}</h1>
                <hr></hr>
                <Row>
                    <Col md={{ size: 'auto' }}>

                        <p className='text-justify '>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur
                    </p>
                    
                        <Image src="/restaurante1.jpg" rounded fluid />
                    </Col>
                    <Col md={6}><ListaEsperaCard></ListaEsperaCard></Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default ResumenRest