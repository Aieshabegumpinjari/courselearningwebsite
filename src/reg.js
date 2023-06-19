import React, { useState } from "react";
import './reg.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
var Register=()=>{


    const [fname, setName] = useState('');
    const [femail, setEmail] = useState('');  
   const [fcou, setcou] = useState('');
   const [freg, setreg] = useState('');
   const [fgen, setgen] = useState('');  
  const [fdob, setdob] = useState('');
    var n=useNavigate()
  
    let sub=async(e)=>{
        e.preventDefault();
        let mydata={fullname:fname,email:femail,course:fcou,regid:freg,gender:fgen,bod:fdob}
        let res=await axios.post("http://localhost:8080/regdata/regpost",mydata)
        alert(res.data);

    }

    return(
        <div>
            <center><form action="" class="form">
         <center><h1>Registration form</h1>
           Fullname:<input type="name"placeholder="enter name" class="box"  value={fname}  onChange={(e) => setName(e.target.value)} required></input><br></br>
            E-Mail :  <input type="email"placeholder="enter email" class="box" value={femail}  onChange={(e) => setEmail(e.target.value)}required></input><br></br>
            Course:<input type="coursename"placeholder="enter coursename" class="box" value={fcou}  onChange={(e) => setcou(e.target.value)} required></input><br></br>
             Reg.id:<input type="id"placeholder="enter id" class="box" value={freg}  onChange={(e) => setreg(e.target.value)} required></input><br></br>
            Gender[M/F] :  <input type="gender"placeholder="enter gender" class="box" value={fgen}  onChange={(e) => setgen(e.target.value)}required></input><br></br>
            Date of birth:<input type="date"placeholder=" enter date" class="box" value={fdob}  onChange={(e) => setdob(e.target.value)}required></input><br></br>
            <input type="submit" value="Register" onClick={sub} id="submit"></input>
         </center>
            
            </form>
            </center>
        </div>
    )
}
export default Register;