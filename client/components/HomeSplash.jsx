import React from 'react'
import {
  Heading,
  Box,
  Text,
  Link,
  Flex,
  Icon,
  Avatar,
  Center,
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link as RouterLink } from 'react-router-dom'
import HomeIcon from './HomeIcon'

function HomeSplash() {
  return (
    <>
      <Heading
        px="200px"
        py="60px"
        size="2xl"
        as="h1"
        color="blue.900"
        alignItems="center"
        marginBottom="-80px"
      >
        Covid Calculator
      </Heading>
      <Box w="full" bg="blue.90" px="200px" py="60px">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg" color="blue.900" marginBottom="10px">
            Wherever you are, whoever you are with, find a safe space to
            enjoy...
          </Heading>
        </Flex>

        <Box>
          <Box maxW="600px">
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
          <HomeIcon></HomeIcon>
        </Box>
      </Box>
      <Center>
        <Box
          w="70%"
          h="100%"
          px="40px"
          py="20px"
          bg="white"
          p="5"
          borderWidth="1px"
          borderRadius="lg"
          mb="16px"
          shadow="lg"
        >
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
      </Center>
    </>
  )
}

export default HomeSplash
