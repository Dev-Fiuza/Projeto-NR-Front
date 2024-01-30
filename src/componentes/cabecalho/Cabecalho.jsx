import MenuLink from "../menuLink/MenuLink";
import { BarraNavegacao } from "./styles";

function Cabecalho() {
  return (
    <BarraNavegacao>
      <MenuLink caminho="/">Menu Inicial</MenuLink>
      <MenuLink caminho="/empresas">Empresas</MenuLink>
      <b>Teste atualização</b>
    </BarraNavegacao>
  );
}

export default Cabecalho;
