import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Box,
  Badge,
  Heading,
  Text,
  Container,
  SimpleGrid,
} from '@chakra-ui/react'
import RatingScore from './RatingScore'
import ReliabilityScore from './ReliabilityScore'
import SafetyInfo from './SafetyInfo'
import UserVoting from './UserVoting'

import { fetchBusiness } from '../actions'

import SafetyInfoExplanation from './SafetyInfoExplanation'

function BusinessListingPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  const business = useSelector((state) => state.business)

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchBusiness(id))
    setIsLoading(false)
  }, [])

  return (
    <>
      <Heading
        color="blue.900"
        as="h1"
        size="2xl"
        mb="10"
        textAlign="center"
        mt="20"
      >
        {business.name}
      </Heading>
      <Container centerContent>
        <Badge borderRadius="full" px="2" colorScheme="blue" mt="-7" mb="10">
          <Text fontSize="md">{business.category}</Text>
        </Badge>
      </Container>
      {!isLoading && (
        <>
          <Container
            maxW="2xl"
            borderWidth="1px"
            borderRadius="lg"
            // borderColor="blue.50"
            mb="16px"
            w="100%"
            // backgroundColor="blue."
            shadow="sm"
          >
            <Box display={{ base: 'block' }} m={5}>
              <SimpleGrid
                minChildWidth="250px"
                columns={2}
                spacingX={10}
                marginTop={10}
              >
                <Box mb="16px" w="100%" p={3}>
                  <Heading as="h2" size="md">
                    {'Address'}
                  </Heading>
                  <Text>{business.address}</Text>
                </Box>
                <Box>
                  <Box>
                    Rating: <RatingScore score={business.rating} />
                  </Box>
                  <Box>
                    Reliability Score:{' '}
                    <ReliabilityScore
                      reliabilityPositive={business.reliabilityPositive}
                      reliabilityNegative={business.reliabilityNegative}
                    />{' '}
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>
          </Container>
          <Box display={{ base: 'block' }} m={5}>
            <SafetyInfo business={business} />
          </Box>
          <Container
            maxW="5xl"
            centerContent
            borderWidth="1px"
            borderRadius="50"
            mb="16px"
            w="100%"
            paddingTop="50px"
            paddingBottom="50px"
            backgroundColor="blue.50"
            marginTop="50px"
            shadow="md"
          >
            <Text fontSize="xl" marginBottom="10px">
              Help us keep this information accurate
            </Text>
            <Text marginBottom="10">
              Does this information reflect your most recent experience at this
              business?
            </Text>
            {!isLoading && (
              <UserVoting
                reliabilityPositive={business.reliability_positive}
                reliabilityNegative={business.reliability_negative}
                id={business.id}
              />
            )}
          </Container>
          <Box marginTop={10}>
            <SafetyInfoExplanation display={{ base: 'block' }} m={5} />
          </Box>
          <Box>
            <Text>
              * Rating calculations are estimated according to data points found
              on{' '}
              <a href="https://www.microcovid.org/" color="blue.200">
                https://www.microcovid.org/
              </a>
            </Text>
          </Box>
        </>
      )}
    </>
  )
}

export default BusinessListingPage
