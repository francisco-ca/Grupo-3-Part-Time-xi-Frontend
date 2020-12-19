import React, { useContext } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Context } from "../store/appContext"
import { useHistory, useParams } from 'react-router'
import '../estilos/inicio.css'

const RestablecerContraseña = () => {
    const { actions } = useContext(Context);
    let { token } = useParams();
    const history = useHistory()
    return (
        <>
            <div className="container " >
                <div className="Cont">
                    <div className="abs-center text-center">
                        <Card style={{ width: '30rem' }} className="borde3 fontt p-4 m-4">
                            <h3 className='pb-3'>Indica tu nueva contraseña</h3>
                            <Form onSubmit={(e) => {
                                actions.onSubmitContraseña(e, token)
                                history.push("/dashboard")
                            }}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={(e) => actions.onChangeUser(e)} required />
                                </Form.Group>
                                <Button className="mb-1 btn botone" block size="lg" variant="dark" type="submit">Cambiar contraseña</Button>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RestablecerContraseña