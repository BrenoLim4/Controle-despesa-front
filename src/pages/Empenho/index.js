import Table from "../../components/Table";

const Empenho = () => {
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

export default Empenho;