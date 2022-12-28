import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Despesa from "./pages/Despesa";
import Pagamento from "./pages/Pagamento";
import Empenho from "./pages/Empenho";

const RoutesApp = () => {

    return(
        <Router>
            <Layout/>
            <Routes>
                <Route path='/' element={<Despesa/>}/>
                <Route path='/empenho' element={<Empenho/>}/>
                <Route path='/pagamento' element={<Pagamento/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesApp;