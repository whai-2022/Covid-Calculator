import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import Rating from './Rating'
import ReliabilityScore from './ReliabilityScore'
import UserVoting from './UserVoting'
import { fetchBusiness } from '../actions'

import BusinessDetail from './BusinessDetail.jsx'

import SafetyInfo from './SafetyInfo'

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
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          Business page{' '}
        </Heading>
      </Flex>{' '}
      {!isLoading && (
        <>
          <Box display={{ base: 'block' }} m={5}>
            <BusinessDetail
              key={business.id}
              name={business.name}
              address={business.address}
              category={business.category}
              reliabilityPositive={business.reliabilityPositive}
              reliabilityNegative={business.reliabilityNegative}
              rating={business.rating}
              id={business.id}
              showDetails={false}
            />
          </Box>
          <Box display={{ base: 'block' }} m={5}>
            <SafetyInfo business={business} />
          </Box>
          <Box>
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
          {!isLoading && <Rating safetyData={business} />}
          {!isLoading && (
            <UserVoting
              reliabilityPositive={business.reliability_positive}
              reliabilityNegative={business.reliability_negative}
              id={business.id}
            />
          )}
        </>
      )}
    </>
  )
}

export default BusinessListingPage
