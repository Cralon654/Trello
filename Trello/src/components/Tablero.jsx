import React, { useState } from 'react';
import Lista from './Lista';

function Tablero() {
  // Estado para almacenar las listas de tareas
  const [listas, setListas] = useState([
    { titulo: 'Lista 1', tarjetas: [] },
    { titulo: 'Lista 2', tarjetas: [] },
    { titulo: 'Lista 3', tarjetas: [] },
  ]);

  // Función para agregar una nueva lista de tareas
  function agregarLista() {
    const nuevaLista = { titulo: 'Nueva Lista', tarjetas: [] };
    setListas([...listas, nuevaLista]);
  }

  return (
    <div className="tablero">
      {listas.map((lista, index) => (
        <Lista key={index} titulo={lista.titulo} tarjetas={lista.tarjetas} />
      ))}
      <button onClick={agregarLista}>Agregar Lista</button>
    </div>
  );
}

export default Tablero;
