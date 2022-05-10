import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { HStack, Center, Box, Icon } from '@chakra-ui/react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

function UserVoting({ reliabilityPositive, reliabilityNegative, id }) {
  // const dispatch = useDispatch()

  function handleSubmit(id) {
    console.log(id)
  }

  return (
    <Box>
      <Center>
        <HStack mt={8} mb={48}>
          <Icon
            as={FaThumbsUp}
            color="teal"
            value={reliabilityPositive}
            onClick={() => handleSubmit(id)}
          ></Icon>
          Vote Positively
          <Icon
            as={FaThumbsDown}
            color="teal"
            value={reliabilityNegative}
            onClick={() => handleSubmit(id)}
          ></Icon>
        </HStack>
      </Center>
    </Box>
  )
}

export default UserVoting
