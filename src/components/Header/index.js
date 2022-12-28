import Menu from "../Menu";
import "./style.css";
import { BsBoxArrowRight } from "react-icons/bs";

const Header = () => {
    const handleLogout = () => {
        alert("Logout Efetuado com sucesso!")
    }

    return(
        
        <div className="hed">
            <Menu/>
            <BsBoxArrowRight onClick={handleLogout} title="Efetuar Logout" size="30px" className="button"/>
        </div>
    )


}

export default Header;