import "./failed.css";
import { MdNoEncryptionGmailerrorred } from "react-icons/md";

export const Failed =()=>{
    return(
        <div className="pere" >
            <h2>Erreur de connexion!Veuillez vérifier vos paramètres!</h2>
 
            <div className="icon" >
                <MdNoEncryptionGmailerrorred />
            </div>
        </div>

    );
}