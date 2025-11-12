import './Boton.css'

function Boton({nombre}) {
  return (
    <div className='boton'>
      <button>{nombre}</button>
    </div>
  );
}

export default Boton;
