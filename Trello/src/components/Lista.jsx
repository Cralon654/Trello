import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

function Lista(props) {
  // Estado para almacenar las tarjetas de la lista
  const [tarjetas, setTarjetas] = useState(props.tarjetas);
  // Estado para almacenar el título de la lista
  const [titulo, setTitulo] = useState(props.titulo);

  // Función para agregar una nueva tarjeta
  function agregarTarjeta() {
    const nuevaTarjeta = { titulo: 'Nueva Tarjeta', descripcion: '' };
    setTarjetas([...tarjetas, nuevaTarjeta]);
  }

  // Función para actualizar el título de la lista
  function actualizarTitulo(evento) {
    setTitulo(evento.target.value);
  }

  return (
    <div className="lista">
      <input type="text" value={titulo} onChange={actualizarTitulo} />
      {tarjetas.map((tarjeta, index) => (
        <Tarjeta key={index} titulo={tarjeta.titulo} descripcion={tarjeta.descripcion} />
      ))}
      <button onClick={agregarTarjeta}>Agregar Tarjeta</button>
    </div>
  );
}

export default Lista;
