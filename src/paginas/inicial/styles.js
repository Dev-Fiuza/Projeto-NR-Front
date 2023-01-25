import styled from "styled-components";

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height:200vh;
`;

export const ConteudoPrincipal = styled.div`
width: 90vw;

div{
display: flex;
align-items: center;
}

  img{
    width: 250px;
    border-radius: 50%;
  }
`;
export const ContainerDescricoes = styled.div`
width: 90vw;
height: 60vh;
background-color: #F7941D;
margin-left: 5vw;
`;
export const ContainerOpcoes = styled.div`
  width: 90vw;
`;
export const Opcoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CardOpcao = styled.div`
width: 20%;
height: 30vh;
background-color: #003B33;
padding: 5%;
margin: 0.5%;

  img{
    width: 100%;
    height: 80%;
  }
`;

export const Imagem = styled.img`
  width: 20vw;
  border-radius: 50%;
`;
