import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect } from 'react-router'

const CierraSesion = (props) => {
    const { store, actions } = useContext(Context);
    console.log(sessionStorage)
    
    return (       
        <Redirect to="/" />
    )
}

export default CierraSesion
