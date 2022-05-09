import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"

import { v4 as uuidv4 } from "uuid";

import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar";
import Home from "../pages/Home"


const TodoContainer = () => {



  return (   
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}>
         
        </Route>
        <Route path= "/about"  element={<About/>}>
       
        </Route>
        <Route path="*"  element={<NotMatch/>}>
          
        </Route>
      </Routes>
    </>
  );
}

export default TodoContainer