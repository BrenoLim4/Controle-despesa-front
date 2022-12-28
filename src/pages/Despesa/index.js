import { useEffect, useState } from "react";
import { Form } from "../../components/Container/componentsStyle";
import Input from "../../components/Input";
import Table from "../../components/Table";
// import Form from "../../components/Form";


const Despesa = () => {

    const [nrProtocolo, setNrProtocolo] = useState('');
// console.log(nrProcolo);
    
const itens = [
    {
        nrProtocolo: "999999",
        valor: 3333,
        dataProtocolo: "22-04-2022",
        empenhado: 3000
    },
    {
        nrProtocolo: "333333",
        valor: 56544.43,
        dataProtocolo: "22-04-2022",
        empenhado: 3000
    },
    {
        nrProtocolo: "43465",
        valor: 3555,
        dataProtocolo: "22-04-2022",
        empenhado: 3000
    },
    {
        nrProtocolo: "888888888888",
        valor: 675655.5,
        dataProtocolo: "22-04-2022",
        empenhado: 3000
    }
]

    return (
        <>
        <Form>
            <h1>Filtrar Despesa</h1>
            <Input 
                type = 'text'
                placeholder = 'NrProtocolo'
                required = {true}
                value = {nrProtocolo}
                setValue = {setNrProtocolo}
                />
            <Input 
                type = 'text'
                placeholder = 'NrProtocolo'
                required = {true}
                value = {nrProtocolo}
                setValue = {setNrProtocolo}
                />
        </Form>
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
            ]}/>
        </>
        
        
    )
}

export default Despesa;