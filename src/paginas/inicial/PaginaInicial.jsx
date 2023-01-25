import {
  ConteudoPrincipal,
  ContainerHome,
  ContainerDescricoes,
  ContainerOpcoes,
  Opcoes,
  CardOpcao,
} from "./styles";
import empresarioConexao from "../../assets/imagens/empresarioconexao.jpg";
import espacoNave from "../../assets/imagens/espaconave.jpg";
import estatistica from "../../assets/imagens/estatistica.jpg";
import maoPlaneta from "../../assets/imagens/maoplaneta.jpg";
import templario from "../../assets/imagens/templario.jpeg";

function PaginaInicial() {
  return (
    <ContainerHome>
      <ConteudoPrincipal>
        <h1>Incubação e Controle</h1>
        <div>
          <img src={templario} alt="Imagem Incubação e Controle" />

          <p>
            Lorem ipsum dolor sit amet. Aut sapiente aliquid sit atque similique
            aut officia enim. Ea consectetur eaque a assumenda nemo qui
            provident voluptatem sit quia veritatis sit odit eius. Qui sequi
            impedit et deserunt perferendis sit possimus voluptas.{" "}
          </p>
        </div>
      </ConteudoPrincipal>

      <div style={{ backgroundColor: "#F7941D", width: "100vw" }}>
        <ContainerDescricoes>
          <h3>Vantagens</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut sapiente aliquid sit atque similique
            aut officia enim. Ea consectetur eaque a assumenda nemo qui
            provident voluptatem sit quia veritatis sit odit eius. Qui sequi
            impedit et deserunt perferendis sit possimus voluptas.{" "}
          </p>
        </ContainerDescricoes>
      </div>

      <ContainerOpcoes>
        <h3>Opções</h3>
        <Opcoes>
          <CardOpcao>
            <img src={empresarioConexao} alt="Imagem" className="imagem" />
            <p>Teste</p>
          </CardOpcao>
          <CardOpcao>
            <img src={espacoNave} alt="Imagem" />
            <p>Teste</p>
          </CardOpcao>
          <CardOpcao>
            <img src={estatistica} alt="Imagem" />
            <p>Teste</p>
          </CardOpcao>
          <CardOpcao>
            <img src={maoPlaneta} alt="Imagem" />
            <p>Teste</p>
          </CardOpcao>
        </Opcoes>
      </ContainerOpcoes>
    </ContainerHome>
  );
}

export default PaginaInicial;
