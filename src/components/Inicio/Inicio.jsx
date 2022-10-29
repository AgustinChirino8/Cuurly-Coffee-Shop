import React from 'react'
import "./Inicio.css";
import image1 from "../../Images/Design/main1.jpg";
import image2 from "../../Images/Design/main2.jpg";
import image3 from "../../Images/Design/main3.jpg";

export const Inicio = () => {
  return (
    <div style={{paddingBottom:"45px" , paddingTop:'20%'}}>
      <div className="bloque">
        <img className="imagen1" src={image1} alt="main1" />
        <h2 className="textoBloque">
          Un ambiente especial , para un{" "}
          <span style={{ color: "brown" }}>cafe especial...</span>
        </h2>
      </div>
      <div style={{paddingTop:"85px" ,paddingBottom:"45px"}} className="bloque">
        <h2 className="textoBloque">
          El lugar donde las{" "}
          <span style={{ color: "brown" }}>variedades y sabores</span> abundan
        </h2>
        <img className="imagen2" src={image2} alt="main2" />
      </div>
      <div className="bloque">
        <img className="imagen3" src={image3} alt="main2" />
        <h2 className="textoBloque">
          <span style={{ color: "brown" }}>Productos</span> especificamente
          seleccionados por nuestros expertos , permitiendo disfrutar una
          expericiencia unica...
        </h2>
      </div>
    </div>
  )
}

export default Inicio;