import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { useNavigate, Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from './AuthContext'; 
import './App.css';
import './login.css';

interface IFormInput {
    email: string;
    password: string;
}

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const { login } = useAuth(); 
    const navigate = useNavigate();
    
   
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const { email, password } = data;

        
        if (email === 'exemple@exemple.com' && password === '12345') {
            login(); 
            navigate('/valide'); 
        } else {
            navigate('/failed'); 
        }
    };

    return (
        <div className="parent">
            
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <h1>Login</h1>
                    <div className="input-box"><label htmlFor="email">Entrez votre Email :</label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            {...register("email", { required: "L'email est requis" })} 
                        />
                        <FaUserAlt className="iconuser" />

                        
                        <br />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="input-box">
                        <label htmlFor="password">Entrez votre Mot de Passe :</label>
                        <input 
                            type="password" 
                            placeholder="Mot de Passe" 
                            {...register("password", { required: "Le mot de passe est requis" })} 
                        />
                        <FaLock className="iconlock" />
                        <br />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <br />
                    <div className="button"><button type="submit">Soumettre</button>
                    </div>
                    <br />
                    <div className="link">
                    <Link to="/inscription"><p>S'inscrire</p></Link>
                    </div>
                </form>
            
        </div>
    );
};
