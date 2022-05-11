import React from 'react'
import { useDispatch } from 'react-redux'
import {
  HStack,
  StatNumber,
  Stat,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from '@chakra-ui/react'
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
    <HStack color="blue.900">
      <span>This was my experience</span>
      <Tag
        p={3}
        size={'lg'}
        variant={'solid'}
        colorScheme={'telegram'}
        opacity={'0.8'}
        cursor={'pointer'}
        onClick={() => handlePositiveSubmit(id)}
      >
        <TagLeftIcon
          boxSize={14}
          as={FaThumbsUp}
          color="white"
          value={reliabilityPositive}
        />
        <TagLabel>
          {' '}
          <Stat>
            <StatNumber>{reliabilityPositive}</StatNumber>
          </Stat>
        </TagLabel>
      </Tag>
      <Tag
        p={3}
        size={'lg'}
        variant={'solid'}
        colorScheme={'telegram'}
        opacity={'0.8'}
        cursor={'pointer'}
        onClick={() => handleNegativeSubmit(id)}
      >
        <TagLabel>
          <Stat>
            <StatNumber>{reliabilityNegative}</StatNumber>
          </Stat>
        </TagLabel>
        <TagRightIcon
          boxSize={14}
          as={FaThumbsDown}
          color="white"
          value={reliabilityNegative}
        />
      </Tag>
      <span>{`This wasn't my experience`}</span>
    </HStack>
  )
}

export default UserVoting
