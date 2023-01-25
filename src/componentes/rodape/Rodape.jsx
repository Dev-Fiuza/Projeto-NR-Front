import { RodapePagina } from "./styles";
import logoCurso from "../../assets/imagens/logoCurso.jpg";

function Rodape() {
  return (
    <RodapePagina>
      <div>
        <p>Contato</p>
      </div>
      <div>
        <p>Informações</p>
      </div>
      <div>
        <img src={logoCurso} alt="imagem" />
      </div>
    </RodapePagina>
  );
}

export default Rodape;
