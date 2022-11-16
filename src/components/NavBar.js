import React, {useState} from 'react'
import { Button,Stack, Container} from '@chakra-ui/react'
import {ColorModeSwitcher} from './darkmode_switch.tsx'



function NavBar(){

  const [active, setActive] = useState('about');
    
  return (
 

    <div>
         <Container centerContent>
            
            <Stack direction='row' spacing={4} align='center'>
             
            
                <Button pr='5px' m='5px' colorScheme='teal' variant='link'> <a href='/'>Home</a></Button>
                <Button onClick={() => setActive('about') } pr='10px' colorScheme='teal' variant='link'><a href='/about'>About</a></Button>
                <Button pr='10px' colorScheme='teal' variant='link'><a href='/myworks'>My Skills</a></Button>
                <Button colorScheme='teal' variant='link'>Contact</Button>
                <ColorModeSwitcher/>

            

            </Stack>

            </Container>

    </div>
        
       
  )
}

 export default NavBar
