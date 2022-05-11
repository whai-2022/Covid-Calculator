import React from 'react'
import {
  Heading,
  Box,
  Text,
  Link,
  Flex,
  Icon,
  AspectRatio,
  Img,
  Avatar,
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link as RouterLink } from 'react-router-dom'

function HomeSplash() {
  return (
    <>
      <Box w="full" bg="blue.90" px="200px" py="60px" mb="120px">
        <Flex justifyContent="space-between" alignItems="center" pb="60px">
          <Heading
            as="h1"
            size="lg"
            letterSpacing={'tighter'}
            color="blue.900"
            pb="50px"
          >
            Wherever you are, find a safe space to enjoy...
          </Heading>

          <Box maxW="300px">
            <Text color="blue.900" pb="20px">
              As we return to normal life, you can now choose a business based
              on its covid safety rating. We have used a clever set of
              algorithms to determine the risk rating before stepping into that
              shop, cafe or even healthcare provider.
            </Text>
            <Link as={RouterLink} to="cities" color="blue.900">
              Explore the app to learn more
              <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
            </Link>
          </Box>
        </Flex>
        <AspectRatio w="full" ratio={16 / 9} mb="-200px">
          <Img src="/images/vector_masked_cafe.svg" pb="60px" />
        </AspectRatio>
      </Box>
      <Box w="full" px="40px" py="20px" bg="white">
        <Flex alignItems="center" pb="20px">
          <Avatar src="https://bit.ly/dan-abramov" mr="20px"></Avatar>
          <Box>
            <Heading fontSize={16} color="blue.900" mb="2px">
              Dan Abramov
            </Heading>
            <Text fontSize={12} color="gray.500">
              Visited the Grey Lynn Community
            </Text>
          </Box>
        </Flex>
        <Text color="blue.700" fontSize={14}>
          &quot;I have friends and family who are immunocompromised. This app
          was just what I needed. I was able to send the list to my family and
          choose a brunch spot for us to enjoy mothers day.&quot;
        </Text>
      </Box>
    </>
  )
}

export default HomeSplash
