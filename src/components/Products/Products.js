import React,{useContext} from "react";
import  { DataContext } from "../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductsList = () => {

  const value = useContext(DataContext);
  const [productos] = value.productos;



  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="Productos">
        {
          productos.map(producto =>(
            <ProductoItem key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            detail={producto.detail}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
             />
          ))
        }
      </div>
    </>
  );
};


export default ProductsList;
