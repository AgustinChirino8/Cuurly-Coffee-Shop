import React from "react";
import { useContext } from "react";
import main from "../../Images/Design/Main.jpg";
import DataContext from "../../context/DataProvider";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;

  const tooglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carritos show" : "carritos";

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart_close" onClick={tooglefalse}>
          <button className="x">x</button>
        </div>
        <h2>Su Carrito</h2>
        <div className="carrito_center">
          {carrito.map((producto) => (
            <div className="carrito_item">
              <img src={producto.image} alt="" />
              <div>
                <h3>{producto.title}</h3>
                <p className="price">${producto.price}</p>
              </div>
              <div>
                <span id="up-arrow" className="material-symbols-outlined">
                  expand_less
                </span>
                <p className="cantidad">1</p>
                <span id="down-arrow" class="material-symbols-outlined">
                  expand_more
                </span>
              </div>
              <div className="remove_item">
                <span name="trash" className="material-symbols-outlined">
                  delete
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="carrito_footer">
          <h3>Total: $23123</h3>
          <button className="btn">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};
