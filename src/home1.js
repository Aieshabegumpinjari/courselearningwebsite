import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';


let Home=()=>{
    let n=useNavigate()
    let Gohome=()=>{
        n('/home')
    }
    let Goabout=()=>{
        n('/About')
    }
    let GoCourses=()=>{
        n('/Courses')
    }
    let GoLogin=()=>{
      n('/Login')
  }
  let GoContact=()=>{
    n('/Contact')
}
let gocon=()=>{
    n('/gocon')
}
 return(
       <div>
        <header>
          <nav class="nav-header">
            
                    <ul   onClick={Gohome}>Home</ul>
                    <ul  onClick={Goabout}>About</ul>
                    <ul onClick={GoCourses}>Courses</ul>
                    <ul onClick={GoLogin}>Logout</ul>
                    <ul onClick={GoContact}>Contact</ul>
                    
                    
                    </nav>
                    <div>
                    <section class="home" id="home">
            <h1>Education from home</h1>
            <p>Education is the most important part of our life.We can join online education anywhere in the country or abroad. Today online education is proving to be very beneficial for students.</p>
            <a href="#"><button  onClick={gocon}class="btn">get started</button>
                <div class="shape"></div>
                </a>
                </section>
            

</div>
                </header>
            
                    </div>
    )
}
export default Home;


            