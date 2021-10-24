import React from "react";
import './errormessage.css'
import img from './err.png'

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something wrong</span>
        </>
        
    )
}

export default ErrorMessage