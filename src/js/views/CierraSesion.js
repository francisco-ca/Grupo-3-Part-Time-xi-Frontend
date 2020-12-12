import React from "react";
import { Redirect } from 'react-router'

const CierraSesion = (props) => {
    console.log(sessionStorage)
    
    return (       
        <Redirect to="/" />
    )
}

export default CierraSesion
