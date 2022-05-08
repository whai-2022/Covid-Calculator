import React from 'react'
import { useParams } from 'react-router-dom'
import { Heading, Flex, Box } from '@chakra-ui/react'

import BusinessList from './BusinessList'
import MapContainer from './MapContainer'

function SuburbResultsPage() {
  const { city, suburb } = useParams()
  const formatLocationName = (locationName) => {
    return locationName
      ?.replace(/-/g, ' ')
      .split(' ')
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .join(' ')
  }

  return (
    <>
      <Heading
        as="h1"
        size="lg"
        mb="10"
        letterSpacing={'tighter'}
        textAlign="center"
        color="gray.700"
      >
        Listings for {formatLocationName(suburb)}, {formatLocationName(city)}
      </Heading>
      <Flex justifyContent="space-evenly">
        <Box colSpan={2} justifyItems={'center'}>
          <MapContainer w="100%" />
        </Box>
        <Box>
          <BusinessList />
        </Box>
      </Flex>
    </>
  )
}

export default SuburbResultsPage
