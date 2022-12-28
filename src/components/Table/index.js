import { Container } from "../Container/componentsStyle"
import "./style.css"

const Table = (props) => {
    
    const {itens, columns} = props;
    
    
    return(
        
            <table>
                <thead>
                    <tr>
                        {columns.map(column => {
                            return(
                                <th>{column.header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {itens.map(item => {
                        return(
                            <tr>
                                {columns.map(column => {
                                    return(
                                        <td>{item[column.property]}</td>
                                    )
                                })}
                            </tr> 
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colSpan={columns.length}>
                            Total registros: {itens.length}
                        </th>
                        
                    </tr>
                </tfoot>
            </table>
    )
}

export default Table;