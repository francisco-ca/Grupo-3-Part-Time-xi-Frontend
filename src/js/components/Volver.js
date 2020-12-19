import React from 'react'
import {  Button } from 'react-bootstrap'
import {useHistory} from 'react-router'
import '../estilos/inicio.css'

const Volver = () => {
    const history = useHistory()
    return (
    <Button className=" btn botone mt-2" size="lg" variant="dark" onClick={()=>history.goBack()}>Volver</Button>
    );
}
export default Volver