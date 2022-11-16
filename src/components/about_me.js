import React from 'react'
import {Heading,Text,Divider,Box, Grid, GridItem, Spacer} from '@chakra-ui/react'
import { motion } from "framer-motion";

function About() {
  return (
    <div>
        <Heading textAlign='center' mt='30px' pb='20px'>Personal information</Heading>
        <Divider color={'red'} />
        <div>
          <Heading as='h6' size='sm' pt='20px'>Born</Heading>
          <Text>Born in Minuwangoda, Sri Lanka (1995)</Text>
          <br/>
          <Heading as='h6' size='sm'>Education</Heading>
          <Text>Completed Advanced level exam in Mathematics | Studieid Aircraft Engineering | Self Studied Web Development & Digital Marketing (2014 - 2018)</Text>
          <br/>
          <Heading as='h6' size='sm'>professional Experiance</Heading>
          <Text>Working as a Freelancer (2018 to present)</Text>
          <br/>
          <Heading as='h6' size='sm'>Hobbies</Heading>
          <Text>Working as a Freelancer | I Love Playing Guitar, DJ, Listning Music, Sightseeing, Learning and Staying upto date with new technolegy.</Text>

        </div>     
    </div>
  )
}

export default About