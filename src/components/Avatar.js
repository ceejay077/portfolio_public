import React from 'react'
import {Image} from '@chakra-ui/react'




function Avatar() {
  return (
    <div className='App'>
        <Image
        borderRadius='full'
        boxSize='200px'
        src={'https://bit.ly/dan-abramov'}
        alt='Dan Abramov'
        margin='auto'
        shadow='dark-lg'
        
        borderWidth='solid'
/>
    </div>
  )
}

export default Avatar