import React, { useState } from 'react';
import NavbarTop from '../components/NavbarTop';
import ResumenRest from '../components/ResumenRest';
import ListaEsperaCard from '../components/ListaEsperaCard';
import { Button, Card, Container, Jumbotron, Col, Row, Image } from 'react-bootstrap';


const ListaEspera = props => {
    const [inList, setInList] = useState(true);

    return (
        <Container>
            <NavbarTop />
            <ResumenRest></ResumenRest>
            
           
        </Container>
    )



}

export default ListaEspera;

