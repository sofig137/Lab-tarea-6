import { useState } from "react";
import "./App.css";
import Switch from "./Switch";

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className={`pagina ${modoOscuro ? "oscuro" : "claro"}`}>
      <Switch activarModo={toggleModo} modoOscuro={modoOscuro} />

      <h1>🌼 Página de Prueba 🌙</h1>
      <p>
        Esta es una pequeña página creada con React :^)  
        Aquí estoy probando cómo funciona el cambio entre modo claro y oscuro.
      </p>

      <div className="botones">
        <button>Botón Lindo</button>
        <button>Botón Bello</button>
        <button>Botón Guapo</button>
      </div>
    </div>
  );
}

export default App;
