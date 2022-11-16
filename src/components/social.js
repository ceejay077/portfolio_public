import React from 'react'
import {HStack,Circle,Center} from '@chakra-ui/react'
import {FaFacebookSquare,FaBlog,FaTwitterSquare,FaLinkedin,FaMixcloud,FaGithubSquare} from 'react-icons/fa'

function Social() {
  return (
    <Center>
    <HStack pt='20px'>
        
            <FaBlog fontSize='30px'/>
            <FaGithubSquare fontSize='30px'/>
            <FaMixcloud fontSize='30px'/>
            <FaLinkedin fontSize='30px'/>
            <FaTwitterSquare fontSize='30px'/>
            <a href='#'><FaFacebookSquare fontSize='30px'/></a>
            

    </HStack>
    </Center>
  )
}

export default Social