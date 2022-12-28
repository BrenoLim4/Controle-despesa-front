import { Link } from "react-router-dom";
import "./style.css"

const DropDown = (props) => {
    
    const {title, links} = props; 
    console.log(links);
    return(
        <div className="dropdown">
            <button className="dropbtn">{title}</button>
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