import React from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

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
      <Heading as="h1" size="lg" letterSpacing={'tighter'}>
        Listings for {formatLocationName(suburb)}, {formatLocationName(city)}
      </Heading>
      <MapContainer />
      <BusinessList />
    </>
  )
}

export default SuburbResultsPage
