import React ,{ createContext, useEffect, useState } from "react";
import data from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos , setProductos] = useState([]);


    useEffect(() => {
        const producto = data.items;
        if(producto){
            setProductos(producto)
        }else{
            setProductos([])
        }

    },[])

    const value = {
        productos : [productos]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContext;