import React from 'react'
import Portada from "../../Images/Design/Main.jpg";
import {Link} from "react-router-dom";

export const Inicio = () => {
  return (
    <div className='Inicio'>
        <Link to="/" >
            <h1>Inicio</h1>
        </Link>
        <Link to="/Products">
            <h1>Productos</h1>
        </Link>
        <img src={Portada} alt="inicio"/>
    </div>
  )
}

export default Inicio;