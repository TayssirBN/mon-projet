import { MdOutlineDoneAll } from "react-icons/md";
import "./valide.css";
import { Link } from "react-router-dom";
export const Valide = () =>{
    return(

        <div>
            <h2>Bienvenu(e)!vous êtes maintenant connectés!</h2> 
            <div className="icon">
            <MdOutlineDoneAll />
            </div>
            <div className="link">
            <Link to="/dashboard"><p>Les catégories de services</p></Link>
            </div>
        </div>
    );

}