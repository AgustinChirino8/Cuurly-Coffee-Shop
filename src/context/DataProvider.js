import React, { createContext, useEffect, useState } from "react";
import { db } from "../Firebase/credenciales";
import { collection, query, getDocs } from "firebase/firestore";



export const DataContext = createContext();

export const DataProvider = (props) => {
//   console.log(db);

  const [productos, setProductos] = useState([]);

  const [menu, setMenu] = useState(false);

  const [carrito, setCarrito] = useState([]);

  const [total, setTotal] = useState(0);
 
  
useEffect(() => {
    
    (async () => {
      try {
        // const producto = data.items;
        const q = query(collection(db, "Coffee"));
        const querySnapshot = await getDocs(q);
        const productosFirebase = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productosFirebase.push({id:doc.id, ...doc.data()})
        });
        //  console.log(productosFirebase);
        setProductos(productosFirebase)

        // if (producto) {
        //   setProductos(producto);
        // } else {
        //   setProductos([]);
        // }
      }catch (error) {
        console.log(error);
      }
    })();
  });
  

  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alert("El producto ya fue añadido");
    }
  };

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.cantidad;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
    cantidad:1,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContext;
