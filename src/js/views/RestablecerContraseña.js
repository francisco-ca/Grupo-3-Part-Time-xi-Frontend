import React, { useContext } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import NavbarTop from '../components/NavbarTop'
import { Context } from "../store/appContext"
import {useHistory, useParams} from 'react-router'
import '../estilos/inicio.css'

const RestablecerContraseña = () => {
    const { actions } = useContext(Context);
    let {token} = useParams();
    const history = useHistory()
    return (
        <>
            {/* <NavbarTop/> */}
            <div className="container " >
                  <div className="Cont">
            <div className= "abs-center text-center">
                <Card style={{ width: '30rem' }} className="p-4 m-4">
                    <h3 className='pb-3'>Indica tu nueva contraseña</h3>
                    <Form onSubmit={(e)=>{actions.onSubmitContraseña(e , token)
                                          history.push("/dashboard")}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="contraseña" placeholder="Contraseña" name="contraseña" onChange={(e) => actions.onChangeUser(e)} required />
                        </Form.Group>
                        <Button className="mb-4" block size="lg" variant="secondary" type="submit">Cambiar contraseña</Button>
                    </Form>
                </Card>
            </div>
            </div>
            </div>

        </>
    );
}

export default RestablecerContraseña