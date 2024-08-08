import React,{ useState } from 'react';
import './App.css';


export const Inscription =()=>{
    const [addresse,setAddresse]=useState('');
    const [password1,setPassword1]=useState('');
    const [cin,setCin]=useState('');
    const [password2,setPassword2]=useState('');
    

    const handleInput1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddresse(event.target.value);
    };
    const handleInput2 = (event:React.ChangeEvent<HTMLInputElement>) => {
      setPassword1(event.target.value);
    };
    const handleInput3 = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCin(event.target.value);
    };
    const handleInput4= (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(event.target.value);
    };

    
    return(
        <div className='parent1'>
            <div className='child'>
                <h2>Créer votre compte!</h2>
                <div className='input-box'>
                <label htmlFor="cin">Votre CIN:</label>
                <input type="number" placeholder='CIN' value={cin} onChange={handleInput3}></input>
               
                <label htmlFor="email">Enter Your Email:</label>
                <input type="email" onChange={handleInput1} placeholder="Email" value={addresse} ></input>
               
                <label htmlFor="email">Enter Your Password:</label>
                <input type="password" onChange={handleInput2} placeholder="Password" value={password1} ></input>
          
                <label htmlFor="email">Verify your Password:</label>
                <input type="password" onChange={handleInput4} placeholder="Password" value={password2} ></input>
                <br/>
                <div className='submit'>
                    <button >Submit</button>
                </div>
                </div>
            </div>

        </div>
    );

}