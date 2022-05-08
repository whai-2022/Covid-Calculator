import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading, Flex, Box } from '@chakra-ui/react'

import BusinessList from './BusinessList'
import MapContainer from './MapContainer'

import api from '../apis'

function SuburbResultsPage() {
  const { city, suburb } = useParams()
  const [location, setLocation] = useState(null)

  const formatLocationName = (locationName) => {
    return locationName
      ?.replace(/-/g, ' ')
      .split(' ')
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .join(' ')
  }

  useEffect(() => {
    // TODO: this mix of `.then` and await is confusing to read, I encourage you to pick a lane
    api
      .fetchCoordinates(
        `${formatLocationName(suburb)}, ${formatLocationName(city)}`
      )
      .then(async (res) => {
        await setLocation(res.features[0].center)
      })
      .catch((err) => {
        // TODO: same comment I made elsewhere, please do something with your errors that benefits the users
        console.error(err)
      })
  }, [])

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
          {location && <MapContainer w="100%" location={location} />}
        </Box>
        <Box>
          <BusinessList />
        </Box>
      </Flex>
    </>
  )
}

export default SuburbResultsPage
