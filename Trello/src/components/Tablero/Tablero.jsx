import React, { useState } from 'react';
import Lista from '../Lista/Lista'
import style from '../Tablero/Tablero.css';
const Tablero = () => {
  // Estado para almacenar las listas de tareas
  const [listas, setListas] = useState([
    { titulo: 'Lista 1', tarjetas: [] },
    { titulo: 'Lista 2', tarjetas: [] },
    { titulo: 'Lista 3', tarjetas: [] },
  ]);

  // Función para agregar una nueva lista de tareas
  const agregarLista = () => {
    const nuevaLista = { titulo: 'Nueva Lista', tarjetas: [] };
    setListas([...listas, nuevaLista]);
  }

  // Función para borrar una  lista de tareas
  const borrarLista = () => {
    setListas(listas.slice(0, -1));
  }

  return (
    <div className="tablero row">
      {listas.map((lista, index) => (
        <Lista key={index} titulo={lista.titulo} tarjetas={lista.tarjetas} />
      ))}
      <div className='boton-lista d-flex flex-column'>
        <button onClick={agregarLista} >+</button>
        <button onClick={borrarLista} >-</button>
      </div>



    </div>
  );
}

export default Tablero;
