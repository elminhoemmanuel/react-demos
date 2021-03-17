import React from 'react'
import {  } from "./mystyles.css";

function Stylesheets(props) {
    const classNameValue = props.primary ? "primary":""
    return (
        <div>
            <h1 className={`${classNameValue} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheets
