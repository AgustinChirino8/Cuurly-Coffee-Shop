import React from "react";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/Products/Products";
import '../src/index.css';
// import "boxicons";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsList />
    </div>
  );
}

export default App;
