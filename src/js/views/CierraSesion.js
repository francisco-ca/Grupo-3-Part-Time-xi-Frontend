import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext';
import { Redirect } from 'react-router'

const CierraSesion = (props) => {
    const { store, actions } = useContext(Context);
    // const id_session = JSON.parse(sessionStorage.getItem('login'));
    // const logout = id_session.login;

    useEffect(() => {
        // actions.logoutPersona(logout)
        actions.loginPersona()
    }, []);


    return (
        <>
            {!store.persona.login ?
                <Redirect to="/"></Redirect>
                :
                console.log("oh")
            }
            {/* <Redirect to="/"></Redirect>
        {
            sessionStorage.clear()
        } */}
        </>

    )
}

export default CierraSesion
