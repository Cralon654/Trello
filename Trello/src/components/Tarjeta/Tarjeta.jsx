import React, { useState } from 'react';

function Tarjeta(props) {
  // Estado para almacenar el título de la tarjeta
  const [titulo, setTitulo] = useState(props.titulo);

  // Función para actualizar el título de la tarjeta
  function actualizarTitulo(evento) {
    setTitulo(evento.target.value);
  }

  return (
    <div className="tarjeta justify-content-around">
      <input type="text" value={titulo} onChange={actualizarTitulo} />
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Tarjeta;
