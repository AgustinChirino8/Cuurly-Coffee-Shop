import React from "react";
import taza from "../../Images/Icons/taza-de-cafe.png";
import { Inicio } from "../Inicio/Inicio";
import { ProductsList } from "../Products/Products";
import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <NavLink path='/Logo'>
        <div className="logo">
          <img style={{ width: "100px", padding: "8%" }} src={taza} alt="" />
        </div>
      </NavLink>
      <ul>
        <li>
          <NavLink to='/Inicio' component={<Inicio/>}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/Products' element={<ProductsList/>}>Productos</NavLink> 
        </li>
        <div className="cart">
          <i className="bi bi-cart-plus-fill"></i>
          <span className="item__total">0</span>
        </div>
      </ul>
    </header>
  );
};
