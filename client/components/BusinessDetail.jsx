import * as React from 'react'
import { Link } from 'react-router-dom'

import { Heading, Box, Center, Flex, Text } from '@chakra-ui/react'
import { MdStar } from 'react-icons/md'

function BusinessDetail({
  id,
  name,
  address,
  category,
  reliabilityScore,
  rating,
}) {
  return (
    <Center h="100vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        {/* <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          
        </Text> */}
        <Heading as="h2" size="3xl">
          {name}
        </Heading>
        <Text mt={2}>{address}</Text>
        <Text mt={2}>{category}</Text>
        <Text mt={2}>Reliability Score {reliabilityScore}</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>Rating {rating}</b>
          </Text>
          <Text ml={1} fontSize="sm">
            <Link to={`/businesses/${id}/`}>Details</Link>
          </Text>
        </Flex>
      </Box>
    </Center>
  )
}

export default BusinessDetail
