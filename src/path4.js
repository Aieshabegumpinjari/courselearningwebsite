import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./home1";
import About from "./about";
import Courses from "./context";
import Contact from "./contact";
import Logout from "./logout";
import SignUpPage from "./signup";
import Login from "./login";
import Course from "./context";
import Enroll from "./page2";
import Register from "./reg";


var Path=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route
                path="/" element={<SignUpPage/>}>
            </Route>
            <Route path="/About" element={<About/>} ></Route>
            
            <Route path="/Courses" element={<Courses/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/gohome" element={<Home/>}></Route>
            <Route path="/cont" element={<Contact/>}></Route>
            <Route path="/goregi" element={<Register/>}></Route>
            <Route path="/gopage" element={<Enroll/>}></Route>
            
            
        </Routes>

        
        </BrowserRouter>

    )
}
export default Path;