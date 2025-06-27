import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Skills from '../pages/Skills'
import Signup from "../components/Signup";
import Login from "../components/Login";
import OtpVerification from "../components/OtpVerification";

const Routerrs = () => {
  return <>

<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/skills" element={<Skills/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/verify" element={<OtpVerification/>}></Route>




</Routes>



  </>;
};

export default Routerrs;
