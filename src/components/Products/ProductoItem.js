import React from "react";
import { useState , useContext } from "react";
import DataContext from "../../context/DataProvider";
import { NavLink } from "react-router-dom";

export const ProductoItem = ({
  id,
  title,
  price,
  detail,
  image,
  category,
  cantidad,
}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  
  return (
    <div className="producto">
      <a href="#/">
        <div className="producto_imagen">
          <img src={image} alt={title} />
        </div>
      </a>
      <div className="producto_footer">
        <h1>{title}</h1>
        <p>{detail}</p>
        <p style={{color:'brown'}}>categoria: {category}</p>
        <p className="price">${price}</p>
      </div>
      <div className="Buttom">
        <button className="btn" onClick={() => addCarrito(id)}>Añadir al carrito</button>
        <div>
          <a href="#/" className="btn">
            Vista
          </a>
        </div>
      </div>
    </div>
  );
};
