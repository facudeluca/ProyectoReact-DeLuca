import React from 'react'
import {Link} from "react-router-dom"
import "./error.css"
import error from "../../404.svg"

function Notfound() {
  return (
    <div className='error'>
        <img src={error} alt="404" width="800px"/>
        <Link to="/">IR AL INICIO</Link>
    </div>
  )
}

export default Notfound