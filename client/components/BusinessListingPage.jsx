import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Stack, Heading, Flex, Text } from '@chakra-ui/react'

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

  const business = useSelector((state) => state.business)

  useEffect(() => {
    dispatch(fetchBusiness(1))
  }, [])

  console.log(business)

  return (
    <>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          Business page{' '}
        </Heading>
      </Flex>{' '}
      {business.name}
    </>
  )
}

export default BusinessListingPage
