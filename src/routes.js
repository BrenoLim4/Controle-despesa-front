import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Despesa from "./pages/Despesa";
import Pagamento from "./pages/Pagamento";
import Empenho from "./pages/Empenho";
import CadastrarDespesa from "./pages/Despesa/cadastrar";

const RoutesApp = () => {

    return(
        <Router>
            <Layout/>
            <Routes>
                <Route path='/' element={<Despesa/>}/>
                <Route path='/despesa/cadastrar' element={<CadastrarDespesa/>}/>
                <Route path='/empenho' element={<Empenho/>}/>
                <Route path='/pagamento' element={<Pagamento/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesApp;