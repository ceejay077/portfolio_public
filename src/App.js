import './App.css';
import {Heading, Container, Spacer, VStack} from '@chakra-ui/react'
import NavBar  from './components/NavBar'
import Avatar from './components/Avatar'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Social from './components/social';
import AnimatedRoutes from './components/animatedRoutes'
import {motion} from 'framer-motion'


function App() { 

  return (
    <motion.div className="App"
      initial={{opacity: 0}}
      animate={{opacity: 2}}
      exit={{opacity: 0}}
    >
      <Spacer boxSize={5}/>
    
      <NavBar/>

           <VStack>

              <Heading pt='20px'> Naveen Chamara </Heading>     
              <p>Digital Craftsman ( Artist / Developer / Designer )</p>            
              <Container borderWidth='0' width='-moz-min-content' height='fit-content' borderRadius='20px' pt='20px'> <Avatar/></Container>
              <BrowserRouter>
           
            <AnimatedRoutes/>
            
            </BrowserRouter>
             
          </VStack>
          
          <Social/>

    </motion.div>
  );
}

export default App;
