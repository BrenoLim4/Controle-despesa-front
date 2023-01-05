import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "../../components/Container/componentsStyle";
import { Row } from "../../components/Container/row";


const CadastrarDespesa = () => {

    const [nrProtocolo, setNrProtocolo] = useState('');
    const [valor, setValor] = useState();
    const [dataProtocolo, setDataProtocolo] = useState();
    const [credor, setCredor] = useState();
    const [descricao, setDescricao] = useState();

    
    const navigate = useNavigate()
    const HandleSalvarDespesa = (e) => {
        e.preventDefault();
        alert("Salvo com sucesso!");
        navigate("/");
    }

    return(
        <Form width="100%">
            <h1>Cadastro Despesa</h1>
            <Row>
                <Input
                    type='text'
                    placeholder='NÚMERO PROTOCOLO'
                    // required={true}
                    value={nrProtocolo}
                    onChange={(e) => setNrProtocolo(e.target.value)}
                />
                <Input
                    type='number'
                    placeholder='VALOR'
                    // required={true}
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
                <Input
                    type={"text"}
                    placeholder='CREDOR'
                    // pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                    // title="CPF ou CNPJ do credor da Despesa, com pontuacão"
                    // required={true}
                    value={credor}
                    onChange={(e) => setCredor(e.target.value)}
                />
            </Row>
            <Row>
                <Input
                    type='text'
                    placeholder='DATA PROTOCOLO'
                    title="Formato permitido [dd/MM/yyyy]"
                    // required={true}
                    value={dataProtocolo}
                    onChange={(e) => setDataProtocolo(e.target.value)}
                />
                <Input
                    type='text'
                    placeholder='DESCRICAO'
                    // required={true}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </Row>
            <Button margintop="5px" align="center" type="submit" onSubmit={HandleSalvarDespesa} onClick={HandleSalvarDespesa}>
                Salvar
            </Button>
      </Form>
    )
}

export default CadastrarDespesa;