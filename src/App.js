import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import logoMax from "./imagenes/logomax.png";
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState (0);

  const manejarClic = () => {
   setNumClics (numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0); 
  };

  return (
    <div className="App">
      <div className="logo-max-contenedor">
        <img className="logo-max" src={logoMax} alt="Logo De Max" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
         texto="Clic"
         esBotonDeClic={true}
         manejarClic={manejarClic}/>
        <Boton 
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
