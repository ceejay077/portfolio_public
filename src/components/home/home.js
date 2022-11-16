import React from 'react'
import {Heading,Text,Divider,Center,VStack} from '@chakra-ui/react'
import {FaHome} from 'react-icons/fa'
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
        <Center margin='10px'>
          <VStack>
            <FaHome fontSize='30px' textAlign='center'/>
            <Text borderWidth='2px' pr='5px' pl='5px' borderRadius='20px' bgColor='grey' borderColor='grey'>Hello there! Happy to see you here.</Text>
          </VStack>

        </Center>

        
        <Divider/>
          <Text borderWidth='2px' p='15px' borderRadius='20px'>I’m Naveen Chamara, an SEO specialist who can offer the right SEO strate
          gies and plans to your exact needs. As a young entrepreneur, I am passionate about search engine optimizing, web page optimizing and branding. 
          Initially, I was an aircraft technician in a leading company. Then I shifted my profession and became a freelancer. In addition, I have successfully
          completed High National Diploma in Digital Marketing at Asia Pacific Institute. This diploma has equipped my knowledge and skills about SEO strategies and tactics. 
          Google is a huge platform that fills with billions of web pages. Hence, ranking on the first page and generating organic traffic is a challenge. Thus, I offer 
          an integrated approach for my clients to improve the businesses by boosting up their web pages on the first page and reaching out to the target customer base.

</Text>       
    </div>
  )
}

export default Home