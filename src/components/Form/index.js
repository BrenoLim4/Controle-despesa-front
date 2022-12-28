import { Container } from "../Container/componentsStyle";
import Input from "../Input";
import "./style.css"

const Form = (props) => {
    
    const {title, inputs} = props;

    return(
        <Container>
                <form>
                    <header>{title}</header>
                    {inputs.map(input => {
                        return(
                            <Input type = {input.type}
                                 placeholder={input.placeholder}
                                 required={input.required}
                                 value={input.value}
                                 setValue={input.setValue}/>
                        )
                    })}
                     {/* <input type="text" placeholder="Número Protocolo"/> */}
                </form>
        </Container>
    )
}

export default Form;