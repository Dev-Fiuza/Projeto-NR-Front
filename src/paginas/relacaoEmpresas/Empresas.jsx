import { useState } from "react";
import { ContainerPrincipal } from "./styles";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Empresas() {
  const [empresas, setEmpresas] = useState([
    {
      id: 1,
      nome: "Empresa Teste",
    },
    {
      id: 2,
      nome: "Empresa Fantasma",
    },
  ]);

  return (
    <ContainerPrincipal>
      <h1>Empresas</h1>
        <DataTable
          value={empresas}
          showGridlines
          size="large"
          responsiveLayout="scroll"
        >
          <Column field="id" header="Código" />
          <Column field="nome" header="Nome Empresa" />
        </DataTable>
    </ContainerPrincipal>
  );
}

export default Empresas;
