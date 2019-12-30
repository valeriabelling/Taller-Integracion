import React from "react";

const Herramienta = ({ herramienta, eliminarHerr }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{herramienta.nombre}</h3>
      <p className="card-text">
        <span>Marca</span> {herramienta.marca}
      </p>
      <p>
        <span>Categoria</span> {herramienta.categoria}
      </p>
      <p>
        <span>Precio</span> {herramienta.precio}
      </p>
      <p>
        <span></span> {herramienta.caracteristicas}
      </p>
      <p>
        <span>Cantidad</span> {herramienta.cantidad}
      </p>

      <button className="btn btn-danger" onClick={() => eliminarHerr(herramienta.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Herramienta;