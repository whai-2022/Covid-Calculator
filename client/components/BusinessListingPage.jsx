import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Box, Heading, Flex } from '@chakra-ui/react'

import { fetchBusiness } from '../actions'

import BusinessDetail from './BusinessDetail.jsx'

import SafetyInfo from './SafetyInfo'

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
        </>
      )}
    </>
  )
}

export default BusinessListingPage
