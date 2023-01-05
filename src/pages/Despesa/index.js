import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "../../components/Container/componentsStyle";
import { Row } from "../../components/Container/row";
// import Input from "../../components/Input";
import Table from "../../components/Table";
// import Form from "../../components/Form";


const Despesa = () => {

  const [nrProtocolo, setNrProtocolo] = useState('');
  const [valor, setValor] = useState();
  const navigate = useNavigate();

  const handleAdicionarDespesa = () => {
    navigate(`/despesa/cadastrar`)
  }

  const itens = [
    {
      id: 1,
      nrProtocolo: "999999",
      valor: 3333,
      dataProtocolo: "22-04-2022",
      empenhado: 3000
    },
    {
      id: 2,
      nrProtocolo: "333333",
      valor: 56544.43,
      dataProtocolo: "22-04-2022",
      empenhado: 3000
    },
    {
      id: 3,
      nrProtocolo: "43465",
      valor: 3555,
      dataProtocolo: "22-04-2022",
      empenhado: 3000
    },
    {
      id: 4,
      nrProtocolo: "888888888888",
      valor: 675655.5,
      dataProtocolo: "22-04-2022",
      empenhado: 3000
    }
  ]

  return (
    <>
      <Form width="100%">
        <h1>Filtrar Despesa</h1>
        <Row>
          <Input
            type='text'
            placeholder='NrProtocolo'
            required={true}
            value={nrProtocolo}
            onChange={(e) => setNrProtocolo(e.target.value)}
          />
          <Input
            type='number'
            placeholder='Valor'
            required={true}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />

        </Row>
      </Form>
      <Button margin="8px" 
             margintop={`10px`}
             width="25%"
             align="left" onClick={() => navigate(`/despesa/cadastrar`)}>
              Adicionar Despesa
        {/* <Link to={`/despesa/cadastrar`}>CadastrarDespesa</Link> */}
      </Button>
      <Table itens={itens}
        columns={[
          {
            property: "nrProtocolo",
            header: "Número Protocolo"
          },
          {
            property: "valor",
            header: "Valor"
          },
          {
            property: "dataProtocolo",
            header: "Data Protocolo"
          },
          {
            property: "empenhado",
            header: "Total Empenhado"
          },
          {
            property: "empenhado",
            header: "Total Empenhado"
          }
          ,
          {
            property: "empenhado",
            header: "Total Empenhado"
          }
        ]} />
    </>


  )
}

export default Despesa;