import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Image, Stack, Text, HStack } from '@chakra-ui/react'

const Login = () => {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout({ returnTo: window.location.origin })
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <div className="login">
      {isAuthenticated ? (
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Text
            fontSize="xl"
            display={{ base: 'none', md: 'block' }}
            aria-label="login message"
            className="login-welcome"
          >
            {`Welcome back, ${user.nickname}`}
          </Text>
          <HStack spacing={2}>
            <Image
              borderRadius="full"
              boxSize="45px"
              src={user.picture}
              alt={user.nickname}
            />
            <Button onClick={handleSignOut} colorScheme="teal" m={2}>
              Sign Out
            </Button>
          </HStack>
        </Stack>
      ) : (
        <Button
          onClick={handleSignIn}
          variant="outline"
          _hover={{ bg: 'teal.600', borderColor: 'teal.600', color: 'white' }}
          colorScheme="teal"
          m={2}
        >
          Business Sign In
        </Button>
      )}
    </div>
  )
}

export default Login
