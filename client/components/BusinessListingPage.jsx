import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

import { fetchBusiness } from '../actions'
// get business info from database
// get safety info from database

// Route
// 1. server route + API function to call it
// 2. route points to DB function

// DB shit
// 1. actions for business DB
// 2. local state for business component

// showing on page
// - layout
// - using data

// Components:
// ---- Rating component (final score)
// ---- Business safety self-score info

function BusinessListingPage() {
  const dispatch = useDispatch()
  const { id } = useParams

  const business = useSelector((state) => state.business)

  useEffect(() => {
    dispatch(fetchBusiness(2))
  }, [])

  console.log(business)

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
