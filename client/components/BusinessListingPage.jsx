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
} from '@chakra-ui/react'
import Rating from './Rating'
import { fetchBusiness } from '../actions'

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
            <Text>Business info:</Text>
            <UnorderedList>
              <ListItem>{business.name}</ListItem>
              <ListItem>{business.category}</ListItem>
              <ListItem>{business.address}</ListItem>
            </UnorderedList>
          </Box>
          <Box display={{ base: 'block' }} m={5}>
            <Text>Safety info:</Text>
            <UnorderedList>
              <ListItem>cleaningProtocol: {business.cleaningProtocol}</ListItem>
              <ListItem>handSanitizer: {business.handSanitizer}</ListItem>
              <ListItem>masking: {business.masking}</ListItem>
              <ListItem>minSpacing: {business.minSpacing}</ListItem>
              <ListItem>vaccinePass: {business.vaccinePass}</ListItem>
              <ListItem>vaccineStaff: {business.vaccineStaff}</ListItem>
              <ListItem>ventilation: {business.ventilation}</ListItem>
            </UnorderedList>
          </Box>
          {!isLoading && <Rating safetyData={business} />}
        </>
      )}
    </>
  )
}

export default BusinessListingPage
