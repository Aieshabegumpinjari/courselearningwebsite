import React, { useState } from "react";
import './signup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const  SignUpPage=()=>{

    
   const [fname, setName] = useState('');
   const [femail, setEmail] = useState('');  
  const [fpassword, setPassword] = useState('');
    const n=useNavigate("")
    let gologin=()=>{
        n("/Login")
       
    }
    
   let Gohome=async(e)=>{
    e.preventDefault()
    if(fname=='')
     {
        
        alert('please enter username' )
     }
     else if(femail=='')
     {
        alert('please enter email id' )
     }
     else if(fpassword=='')
     {
        alert('please enter password' )
     }
     else{
        let data={name:fname,email:femail,pass:fpassword}
        let result=await axios.post('http://localhost:8080/Signdata/logindara',data)
        alert(result.data)
        n("/login")
       
     }
    }              




   
    

    return(
        <center>
            <table border>
                        <div id="div9">
        <form>
            <h1 style={{color:"black"}}><b>WELCOME!!!</b></h1><br></br>
            Name:<input type="name" placeholder="enter name" required value={fname}  onChange={(e) => setName(e.target.value)}></input> <br></br><br></br><br></br><br></br>
            Gmail:<input type="Gmail" placeholder="enter email" value={femail}  onChange={(e) => setEmail(e.target.value)}  required></input><br></br><br></br><br></br><br></br>
            Password:<input type="password" placeholder="enter password" value={fpassword} onChange={(e) => setPassword(e.target.value)} required></input>
            <center><button variant="contained" onClick={Gohome}>SUBMIT</button></center>
            <center><button onClick={gologin} variant="contained" >LOGIN</button></center>
            </form>

        </div>
        </table>
        </center>
        
    )
}
export default SignUpPage;