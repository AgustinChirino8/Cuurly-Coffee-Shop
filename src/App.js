import React from "react";
import { Header } from "./components/Header/Header";
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/Products/Products";
import Inicio from "./components/Inicio/Inicio";
import { DataProvider } from "./context/DataProvider";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Products" element={<ProductsList />} />
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
