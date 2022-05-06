import React, { useEffect } from 'react'
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

import { fetchBusiness } from '../actions'

function BusinessListingPage() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const business = useSelector((state) => state.business)

  useEffect(() => {
    dispatch(fetchBusiness(id))
  }, [])

  return (
    <>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          Business page{' '}
        </Heading>
      </Flex>{' '}
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
    </>
  )
}

export default BusinessListingPage
