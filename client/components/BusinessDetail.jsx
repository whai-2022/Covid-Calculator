import * as React from 'react'
import { Box, Center, Image, Flex, Badge, Text } from '@chakra-ui/react'
import { MdStar } from 'react-icons/md'

function BusinessDetail({ name, address, rating }) {
  return (
    <Center h="100vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {name}
        </Text>
        <Text mt={2}>{address}</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>{rating}</b> (190)
          </Text>
        </Flex>
      </Box>
    </Center>
  )
}

export default BusinessDetail
