// src/VisualizadorProps.js
import React from 'react';
import './VisualizadorProps.css'; // si vas a usar CSS externo

const VisualizadorProps = ({ nombre, fecha, descripcion }) => {
  return (
    <div className="contenedor-props">
      <h2>Información recibida:</h2>
      <ul>
        <li><strong>Nombre:</strong> {nombre}</li>
        <li><strong>Fecha:</strong> {fecha}</li>
        <li><strong>Descripción:</strong> {descripcion}</li>
      </ul>
    </div>
  );
};

export default VisualizadorProps;
