import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Box,
  Heading,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Badge,
  Stack,
} from '@chakra-ui/react'
import Rating from './Rating'
import ShowStat from './ShowStat'
import ReliabilityScore from './ReliabilityScore'
import { fetchBusiness } from '../actions'

import safetyOptions from '../data/safetyOptions.json'

function BusinessListingPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  const business = useSelector((state) => state.business)
  console.log(business)

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchBusiness(id))
    setIsLoading(false)
  }, [])

  return (
    <>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          Business page{' '}
        </Heading>
      </Flex>{' '}
      {!isLoading && (
        <>
          <Box display={{ base: 'block' }} m={5}>
            <Text>Business info:</Text>
            <UnorderedList>
              <ListItem>{business.name}</ListItem>
              <ListItem>{business.category}</ListItem>
              <ListItem>{business.address}</ListItem>
            </UnorderedList>
          </Box>
          <Box display={{ base: 'block' }} m={5}>
            <Heading as="h2" size="md" letterSpacing={'tighter'}>
              Safety info:
            </Heading>
            <Box direction="row">
              <Text>Cleaning Protocol: </Text>
              {business.vaccineStaff ? (
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  In place
                </Badge>
              ) : (
                <Badge borderRadius="full" px="2" colorScheme="orange">
                  Not in place
                </Badge>
              )}
            </Box>
            <Box direction="row">
              <Text>Hand Sanitizer: </Text>
              {business.handsanitizer ? (
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Avaliable
                </Badge>
              ) : (
                <Badge borderRadius="full" px="2" colorScheme="orange">
                  Not Avaliable
                </Badge>
              )}
            </Box>
            <Box direction="row">
              <Text>Masking: </Text>
              <ShowStat
                stat={business.masking}
                titles={safetyOptions.masking}
              />
            </Box>
            <Box direction="row">
              <Text>Minimum Spacing: </Text>
              <ShowStat
                stat={business.minSpacing}
                titles={safetyOptions.minSpacing}
              />
            </Box>
            <Box direction="row">
              <Text>Ventilation: </Text>
              <ShowStat
                stat={business.ventilation}
                titles={safetyOptions.ventilation}
              />
            </Box>
            <Box direction="row">
              <Text>Vaccination Pass: </Text>
              {business.vaccinePass ? (
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Visitor vaccination pass required
                </Badge>
              ) : (
                <Badge borderRadius="full" px="2" colorScheme="orange">
                  Visitor vaccination pass not required
                </Badge>
              )}
            </Box>
            <Box direction="row">
              <Text>Staff Vaccination: </Text>
              {business.vaccineStaff ? (
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Staff vaccinations required
                </Badge>
              ) : (
                <Badge borderRadius="full" px="2" colorScheme="orange">
                  Staff vaccinations not required
                </Badge>
              )}
            </Box>
          </Box>
          {!isLoading && <Rating safetyData={business} />}
          <Heading as="h2" mt="6" size="lg" letterSpacing={'tighter'}>
            Reliability Score:
          </Heading>
          {!isLoading && (
            <ReliabilityScore
              reliabilityPositive={business.reliability_positive}
              reliabilityNegative={business.reliability_negative}
            />
          )}
        </>
      )}
    </>
  )
}

export default BusinessListingPage
