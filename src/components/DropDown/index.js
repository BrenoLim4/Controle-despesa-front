import { Link } from "react-router-dom";
import "./style.css"
import { ImMenu } from "react-icons/im";

const DropDown = (props) => {
    
    const {links} = props; 
    return(
        <div className="dropdown">
            <ImMenu className="dropbtn" size={20} color="black"/>
            {/* <button className="dropbtn">{title}</button> */}
            <div className="dropdown-content">
                {
                    links?.map(link => {
                        return (                           
                            <Link to={link.path}>{link.label}</Link>
                        );
                    }) 
                }
            </div>
        </div>
    )
}

export default DropDown;