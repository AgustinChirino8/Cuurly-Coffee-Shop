import React from "react";
import IMG from "../../Images/Coffee/brasil.jpg";

export const ProductsList = () => {
  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="Productos">
        <div className="producto">
          <a href="#/">
            <div className="producto_imagen">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Nombre</h1>
            <p>Descripcion</p>
            <p className="price">$2500</p>
          </div>
          <div className="Buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#/" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="#/">
            <div className="producto_imagen">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Nombre</h1>
            <p>Descripcion</p>
            <p className="price">$2500</p>
          </div>
          <div className="Buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#/" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="#/">
            <div className="producto_imagen">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Nombre</h1>
            <p>Descripcion</p>
            <p className="price">$2500</p>
          </div>
          <div className="Buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#/" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="#/">
            <div className="producto_imagen">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Nombre</h1>
            <p>Descripcion</p>
            <p className="price">$2500</p>
          </div>
          <div className="Buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#/" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="#/">
            <div className="producto_imagen">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Nombre</h1>
            <p>Descripcion</p>
            <p className="price">$2500</p>
          </div>
          <div className="Buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#/" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ProductsList;