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
    <HStack bg="blue.200" color="blue.900" borderRadius={15} p={3}>
      <span>This was my experience</span>
      <Icon
        boxSize={14}
        as={FaThumbsUp}
        color="white"
        value={reliabilityPositive}
        onClick={() => handlePositiveSubmit(id)}
      ></Icon>
      <Stat>
        <StatNumber>{reliabilityPositive}</StatNumber>
      </Stat>
      <Box bg="white"></Box>
      <Stat>
        <StatNumber>{reliabilityNegative}</StatNumber>
      </Stat>
      <Icon
        boxSize={14}
        as={FaThumbsDown}
        color="white"
        value={reliabilityNegative}
        onClick={() => handleNegativeSubmit(id)}
      ></Icon>
      <span>{`This wasn't my experience`}</span>
    </HStack>
  )
}

export default UserVoting
