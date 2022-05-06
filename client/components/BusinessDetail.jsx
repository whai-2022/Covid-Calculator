import * as React from 'react'
import { Link } from 'react-router-dom'

import { Box, Center, Flex, Text } from '@chakra-ui/react'
// import { MdStar } from 'react-icons/md'

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
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {name}
        </Text>
        <Text mt={2}>{address}</Text>
        <Text mt={2}>{category}</Text>
        <Text mt={2}>{reliabilityScore}</Text>
        <Flex mt={2} align="center">
          {/* <Box as={MdStar} color="orange.400" /> */}
          <Text ml={1} fontSize="sm">
            <b>{rating}</b> (190)
          </Text>
          <Link to={`/businesses/${id}/`}>Details</Link>
        </Flex>
      </Box>
    </Center>
  )
}

export default BusinessDetail
