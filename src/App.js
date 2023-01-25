import './App.css';
import Cabecalho from './componentes/cabecalho/Cabecalho';
import Rodape from './componentes/rodape/Rodape';
import PaginaInicial from './paginas/inicial/PaginaInicial';
import ReactRouter from 'react-router-dom'

function App() {
  return (
  <div>
    <Cabecalho/>
    <PaginaInicial/>
    <Rodape/>
  </div>
  );
}

export default App;
