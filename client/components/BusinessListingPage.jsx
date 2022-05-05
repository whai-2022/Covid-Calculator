import React from 'react'
import { Box, Stack, Heading, Flex, Text } from '@chakra-ui/react'
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
  return (
    <>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          Business page{' '}
        </Heading>
      </Flex>{' '}
    </>
  )
}

export default BusinessListingPage
