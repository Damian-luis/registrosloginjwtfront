import React from "react";
import axios from 'axios';
import { useState } from 'react';

export default function Login(){


//Login con logica Simple

const [user,setUser]=useState({name:"",password:"",})
const [useractive,setUseractive]=useState()

//Handler de estado
function nameHandler(e){
    setUser({...user,name:e.target.value})
    }
function passwordHandler(e){
    setUser({...user,password:e.target.value})
    }

//Handler de envio
async function handlerSend(e){
    e.preventDefault()
    console.log(user.name,user.password)
    
    try{
        await axios.get(`http://localhost:3001/user/${user.name}/${user.password}`).then(e=>{setUseractive(e.data)})
    }
    catch(e){console.log(e)}
    }




//PETICIONES CON JWT




const [estado,setEstado] =useState({
    user:"",
    password:"",
    })
//Handler de envio
async function mandar(e){
    e.preventDefault()
    console.log(estado)
    await axios.post("http://localhost:3001/login",estado).then(e=>{console.log(e.data)})
    setEstado({ user:"",
    password:""})
    }
//Handler de estado
function usuar(e){
    const value=e.target.value;
    setEstado({...estado,user:value})
    }
function pass(e){
    const pass=e.target.value;
    setEstado({...estado,password:pass})
    }


return <div>
    <form onSubmit={handlerSend}>
        <input type="text" placeholder="ingrese usuario" onChange={nameHandler}/>
        <input type="text" placeholder="ingrese contraseña" onChange={passwordHandler}/>
        <button type="submit" >Iniciar sesion</button>
     </form>

     {useractive==null? <h4>Por favor inicie sesion</h4>:<h2>Bienvenido {useractive[0].user}</h2>}
     <hr/>








     <h1>Login con JWT</h1>
     <form onSubmit={mandar}>
        <input type="text" placeholder="ingrese usuario" onChange={usuar} value={estado.user}/>
        <input type="text" placeholder="ingrese contraseña" onChange={pass}  value={estado.password}/>
        <button type="submit" >Iniciar sesion</button>
     </form>

     {useractive==null? <h4>Por favor inicie sesion</h4>:<h2>Bienvenido {useractive[0].user}</h2>}
</div>
}