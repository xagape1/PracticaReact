import React, { useContext } from 'react'
import { useState } from 'react';
import { UserContext } from '../userContext';
import { useContext } from 'react';


const Login = () => {
    let {userId, setUserId} = useContext(UserContext);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");

    const sendLogin = async (e) => {
        e.preventDefault();
        try{
            const data = await fetch("http://localhost:3004/users/?email="+email, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              method: "GET"
            });
            const resposta = await data.json();
            console.log(resposta[0])
            if(resposta[0].email==email){
                setUserId(resposta[0].id)
              }
        } catch(err){
            console.log(err.message);
            alert(err);
        };
    };
  return (
    <div className="login-form">
     <h1>Xavi</h1>
     <div className="form-group ">
     <label className="form-label" for="form2Example1">Email address</label>
     <input name="email" type="email" id="form2Example1" className="form-control" onChange={(e)=>{setEmail(e.target.value);}}/>
       <i className="fa fa-user"></i>
     </div>
     <button type="button" className="log-btn" onClick={(e) => {
        sendLogin(e);
     }} >Log in</button>
     {error? (<div>{error}</div>):(<></>) }

   </div>

  )

}
export default Login
