import React from 'react';
import './App.css';
import VisualizadorProps from './VisualizadorProps';

function App() {
  return (
    <div className="App">
      <h1>Mi Visualizador de Props</h1>
      <VisualizadorProps 
        nombre="Jesus"
        fecha="23 de abril de 2025"
        descripcion="Este componente muestra información pasada como props."
      />
    </div>
  );
}

export default App;

