import React, { useState } from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import styles from './Lista.css';

const Lista = (props) => {
  // Estado para almacenar las tarjetas de la lista
  const [tarjetas, setTarjetas] = useState(props.tarjetas);
  // Estado para almacenar el título de la lista
  const [titulo, setTitulo] = useState(props.titulo);

  // Función para agregar una nueva tarjeta
  const agregarTarjeta = () => {
    const nuevaTarjeta = { titulo: 'Nueva Tarjeta', descripcion: '' };
    setTarjetas([...tarjetas, nuevaTarjeta]);
  }
  // Función para borrar una  tarjeta de tareas
  const borrarTarjeta = () => {
    setTarjetas(tarjetas.slice(0, -1));
  }
  // Función para actualizar el título de la lista
  const actualizarTitulo = (evento) => {
    setTitulo(evento.target.value);
  }


  return (
    <div className="lista d-flex flex-column">
      <input type="text" value={titulo} onChange={actualizarTitulo} />
      {tarjetas.map((tarjeta, index) => (
        <Tarjeta key={index} titulo={tarjeta.titulo} descripcion={tarjeta.descripcion} />
      ))}
      <button onClick={agregarTarjeta}>+</button>
      <button onClick={borrarTarjeta}>-</button>
    </div>
  );
}

export default Lista;
