import React from "react";
import { Header } from "./components/Header/Header";
import "../src/index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProductsList from "./components/Products/Products";
import Inicio from "./components/Inicio/Inicio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path='/Products' element={<ProductsList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
