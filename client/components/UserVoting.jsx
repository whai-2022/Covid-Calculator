import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, HStack, Center, Box, Icon } from '@chakra-ui/react'
import { FaThumbsUp } from 'react-icons/fa'

function UserVoting({ reliabilityPositive, reliabilityNegative, id }) {
  const dispatch = useDispatch()

  function handleSubmit() {}

  return (
    <Box>
      <Center>
        <HStack mt={8} mb={48}></HStack>
        <Icon
          as={FaThumbsUp}
          colorScheme="teal"
          value={reliabilityPositive}
          onClick={() => handleSubmit(id)}
        ></Icon>
        Vote Positively
      </Center>
    </Box>
  )
}

export default UserVoting
