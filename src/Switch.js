import './Boton.css'
import { useState } from 'react';

function Switch({ activarModo, modoOscuro }) {
  return (
    <button className="switch" onClick={activarModo}>
      {modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
}

export default Switch;
