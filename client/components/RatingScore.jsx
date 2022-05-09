import React from 'react'
import { Heading } from '@chakra-ui/react'

function Rating({ score }) {
  return (
    <>
      <Heading as="h2" size="lg" letterSpacing={'tighter'}>
        {`${score}%`}
      </Heading>
    </>
  )
}

export default Rating
