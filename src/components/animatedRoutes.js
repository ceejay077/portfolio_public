import React, { useState } from 'react'
import { Router, Route, Routes, useLocation } from 'react-router-dom'
import {Heading, Container, Spacer, VStack} from '@chakra-ui/react'
import Home from './home/home'
import MyWorks from './myworks';
import About from './about_me'
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
   const location = useLocation();
   
  return (
  
    <AnimatePresence>
       <Routes location={location} key={location.pathname} >
           
            <Route path='/' element={<Container borderWidth='0' mt='30px'><Home/></Container>}/>
            <Route path='/about' element={<Container borderWidth='0' mt='30px'><About/></Container>}/>
            <Route path='/myworks' element={<Container><MyWorks/></Container>}/>       
        </Routes>
    </AnimatePresence>

  

  )
}

export default AnimatedRoutes