import { useEffect, useState } from "react";
import {
  ContainerPrincipal,
  ContainerSuperior,
  ContainerTabela,
} from "./styles";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { api } from "../../services/api";

function Empresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    api.get(`/startup`).then((response) => {
      setEmpresas(response.data);
    });
  }, []);

  function pegarDadosEmpresa() {
    api.get(`/startup`).then((response) => {
      setEmpresas(response.data);
    });
  }

  function criarNovaEmpresa() {
    api
      .post(`/startup`, {
        nomeEmpresa: "Empresa 1",
        tipoEmpresa: "Tech",
        cnpj: "01.736.759/0001-08",
        indicadorIncubacao: true,
      })
      .then(
        (response) => {
          pegarDadosEmpresa();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function atualizarEmpresa(codigo) {
    api.patch(`/startup/${codigo}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  function deletarEmpresa(codigo) {
    api.delete(`/startup/${codigo}`).then(
      (response) => {
        pegarDadosEmpresa();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  function botoes(e) {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => atualizarEmpresa(e.idStartup)}>Atualizar</button>
        <button onClick={() => deletarEmpresa(e.idStartup)}>Deletar</button>
      </div>
    );
  }

  return (
    <ContainerPrincipal>
      <ContainerSuperior>
        <h1>Empresas</h1>
        <button
          onClick={() => {
            criarNovaEmpresa();
          }}
        >
          Adicionar Empresa
        </button>
      </ContainerSuperior>

      <ContainerTabela>
        <DataTable
          value={empresas}
          showGridlines
          size="large"
          responsiveLayout="scroll"
        >
          <Column field="idStartup" header="Código" />
          <Column field="nomeEmpresa" header="Nome Empresa" />
          <Column field="tipoEmpresa" header="Tipo da Empresa" />
          <Column field={(e) => botoes(e)} header="Ações" />
        </DataTable>
      </ContainerTabela>
    </ContainerPrincipal>
  );
}

export default Empresas;