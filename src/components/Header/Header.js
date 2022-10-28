import React from "react";
import taza from "../../Images/Icons/taza-de-cafe.png";


export const Header = () => {
  return (
    <header>
      <a href="#/">
        <div className="logo">
          <img style={{width:'5%'}} src={taza} alt="" />
        </div>
      </a>
      <ul>
        <li>
          <a href="#/">Inicio</a>
        </li>
        <li>
          <a href="#/">Productos</a>
        </li>
        <div className="cart">
        <i className="bi bi-cart-plus-fill"></i>
          <span className="item__total">0</span>
        </div>
      </ul>
    </header>
  );
};
