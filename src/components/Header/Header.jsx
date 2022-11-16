import React from "react";
import taza from "../../Images/Icons/taza-de-cafe.png";
import { Inicio } from "../Inicio/Inicio";
import { ProductsList } from "../Products/Products";
import { NavLink } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import DataContext from "../../context/DataProvider";
import { useContext } from "react";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu , setMenu] = value.menu;
  const [carrito] = value.carrito

  // console.log(menu)

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header>
      <NavLink path="/Logo">
        <div className="logo">
          <img style={{ width: "100px", padding: "8%" }} src={taza} alt="" />
        </div>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/Inicio" component={<Inicio />}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products" element={<ProductsList />}>
            Productos
          </NavLink>
        </li>
        <div className="carti_icon">
          <NavLink to="/Cart" element={<Cart />}>
            <i className="bi bi-cart-plus-fill" onClick={toogleMenu}></i>
            <span className="item__total">{carrito.length}</span>
          </NavLink>
        </div>
      </ul>
    </header>
  );
};


export default Cart;