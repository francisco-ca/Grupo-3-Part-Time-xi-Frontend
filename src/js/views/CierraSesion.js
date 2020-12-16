import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext';
import { Redirect } from 'react-router'

const CierraSesion = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => { }, []);
    sessionStorage.clear();

    return (   
        <Redirect to="/ingreso"></Redirect>
    )
}

export default CierraSesion
