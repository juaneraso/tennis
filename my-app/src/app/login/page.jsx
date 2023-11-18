"use client"

import { useState } from "react";


const Login = () => {

  const [info,setInfo] = useState("");
   

  const handleClick = () => {

    setInfo("hola");
    
  }

  const handelSubmit = (event) =>{
    
    event.preventDefault();

  }
  
 

  return (
    <form onSubmit={handelSubmit}>
      <h1>Bienvenido</h1>
      <label>Usuario</label>
      <br></br>
      <input></input>
      <label>Contraseña</label>
      <input></input>
      <br></br>
      <button>INICIAR SESION </button>
      <br></br>
      <button type="submit" onClick={handleClick}>Google</button>

    </form>
  );
};

export default Login;
