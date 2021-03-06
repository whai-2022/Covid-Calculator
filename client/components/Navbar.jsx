import React from 'react'
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure,
  Icon,
} from '@chakra-ui/react'
import { BsCalculator } from 'react-icons/bs'
import { HamburgerIcon } from '@chakra-ui/icons'
import Auth0Login from './Auth0Login'
import { Link } from 'react-router-dom'

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="blue.900"
      color="gray.200"
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Icon as={BsCalculator} color="blue.200" h={10} w={10} mr="12px" />
        </Link>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Link to="/">Covid Calculator</Link>
        </Heading>
      </Flex>
      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text fontSize="xl">
          <Link to="/">Home</Link>
        </Text>
        <Text fontSize="xl">
          <Link to="cities">Cities</Link>
        </Text>
        <Text></Text>
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Auth0Login />
      </Box>
    </Flex>
  )
}

export default Navbar
