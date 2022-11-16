import React from 'react'
import {Heading,Text,Divider,Box} from '@chakra-ui/react'
import { motion } from "framer-motion";

function MyWorks() {
  return (
    <div>
        <Heading textAlign='center' mt='30px' pb='20px'>My Skills</Heading>
        <Divider color={'red'}/>
        <div>
          <Heading as='h6' size='sm'>keyword Research</Heading>
          <Text>help you to find winning keywords for your business</Text>
          <br/>
          <Heading as='h6' size='sm'>SEO</Heading>
          <Text>help you to reach your targeted audience & increase online visibility.</Text>
          <br/>
          <Heading as='h6' size='sm'>Competitor Analysis</Heading>
          <Text>I will analyse your competitors and give you recommendations </Text>
          <br/>
          <Heading as='h6' size='sm'>Wordpress</Heading>
          <Text>I will design beautiful and interactive website  for your business</Text>

        </div>     
    </div>
  )
}

export default MyWorks