import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Context } from "../store/appContext";
import "./listaespera.css"

const EnvioMsj = (props) => {
    const { actions } = useContext(Context);
    let usuario = props.nombre
    let restaurante = props.restaurante
    let direccion = props.direccion
    return (
        <Form onSubmit={(e)=>actions.onSubmitMsj(e, usuario, restaurante, direccion)}>
            <Button variant="dark" className="botonEnviar" type="submit">Enviar Aviso</Button>
        </Form>
    );
}
export default EnvioMsj