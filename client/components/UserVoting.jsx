import React from 'react'
import { useDispatch } from 'react-redux'
import { HStack, Box, Icon, StatNumber, Stat } from '@chakra-ui/react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { postThumbDown, postThumbUp } from '../apis/voting'
import { fetchBusiness } from '../actions/business'

function UserVoting({ reliabilityPositive, reliabilityNegative, id }) {
  const dispatch = useDispatch()

  function handlePositiveSubmit(businessId) {
    postThumbUp(businessId)
      .then(() => {
        dispatch(fetchBusiness(businessId))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleNegativeSubmit(businessId) {
    postThumbDown(businessId)
      .then(() => {
        dispatch(fetchBusiness(businessId))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Box>
      <HStack mt={8} mb={48}>
        <Icon
          boxSize={14}
          as={FaThumbsUp}
          color="teal"
          value={reliabilityPositive}
          onClick={() => handlePositiveSubmit(id)}
        ></Icon>
        <Stat>
          <StatNumber>{reliabilityPositive}</StatNumber>
        </Stat>
        <Icon
          boxSize={14}
          as={FaThumbsDown}
          color="teal"
          value={reliabilityNegative}
          onClick={() => handleNegativeSubmit(id)}
        ></Icon>
        <Stat>
          <StatNumber>{reliabilityNegative}</StatNumber>
        </Stat>
      </HStack>
    </Box>
  )
}

export default UserVoting
