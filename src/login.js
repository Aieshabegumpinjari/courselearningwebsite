import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
   const [fname, setName] = useState('');
   const [femail, setEmail] = useState('');  
  const [fpassword, setPassword] = useState('');
  

  var n=useNavigate()
  var gohome1=async(e)=>{
    e.preventDefault();

    if(fname=='') {
            alert('please enter username')
        }
        else if(fpassword=='') {
                    alert('please enter password')
                }
                else {
                     
                    let result=await axios.post("http://localhost:8080/Signdata/login/"+fname+"/"+fpassword)
                    alert(result.data)
                    if(result.data=="success")
                    n("/gohome")
                   
                }
        
    

   

  }
  let GoLogin=()=>{
    n('/Login')
}

  return (
    <div>        
        <form class="c1"  style={{borderWidth:'2mm',marginRight:"10cm",align:"center",backgroundColor:"pink",border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
         <h2 class="c2" color='green'>Login</h2>
         <div class="div1">
          <label  style={{backgroundColor:'ligthblue'}}>Name:</label><br></br>
          <input  class="c3"  type="name" color='lightgrey' placeholder='enter name'required value={fname}  onChange={(e) => setName(e.target.value)}/><br></br>
        </div>
      
       <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightblue'}}>Password:</label><br></br>
          <input class="c5" type="password"  color='lightgrey' placeholder='enter password'required value={fpassword} onChange={(e) => setPassword(e.target.value)}/><br></br>
          
        </div >
        <div style={{backgroundColor:'white'}}>
            <a href='#'  style={{backgroundColor:'white'}} >forget password?</a>
        
        <button onClick={gohome1} class="c6"  type="submit">Login</button>
        </div>
      
      </form>
      
    </div>
  )
  }
                     export default Login;
                    /* import React from "react";
import "./login.css";

var Hello=()=>{
    var change=()=>{
        let x=document.getElementById("a").value
        let y=document.getElementById("b").value
        let z=document.getElementById("c").value
        if(x=="" && y=="" && z==""){
            alert("please enter the neccessary information")
        }
        else if(x==""){
            alert("please enter the name")
            
        }
        else if(y==""){
            alert("please enter mail or phone")
        }
        else if(z==""){
            alert("please enter the password")
        }
        
        else{
            alert("successfully logged in")
        }
    }
  

    
    return(
        
        <div class="con">
            <span class="border"></span>
           
            <form >
                <center><h1>User Login:</h1></center><br></br>
                <div class="font"></div>
               <span>Name:</span> <input  type="text" id="a" placeholder="enter name" required></input><br></br><br></br>
                <div class="font1" name=""></div>
                <span>Email or phone:</span><input  type="text" id="b" placeholder="enter mail or phone num" required></input><br></br><br></br>
                <div class="font3"></div>
             <span>  Password:</span><input  type="password" id="c" placeholder="enter password" required></input><br></br><br></br>
               <center> <button type="submit" onClick={change}>Login</button></center>
                <div class="forg">
                <a href="#" >Forgot password?</a>
            
                
            </div>
            </form>
           
            
        </div>

    )
}
export default Hello;*/