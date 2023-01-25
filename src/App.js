import "./App.css";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Rodape from "./componentes/rodape/Rodape";
import PaginaInicial from "./paginas/inicial/PaginaInicial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaCoringa from "./paginas/coringa/PaginaCoringa";
import Empresas from "./paginas/relacaoEmpresas/Empresas";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="*" element={<PaginaCoringa />} />
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/empresas" element={<Empresas />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;
