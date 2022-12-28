import DropDown from "../DropDown";


const Menu = () => {

    const options = [
                {path : '/', label : 'Despesa'}, 
                {path : '/empenho', label : 'Empenho'}, 
                {path : '/pagamento', label : 'Pagamento'}
            ]   

    return(
        <DropDown title = 'Modulos' links = {options}/>
    )
}

export default Menu;