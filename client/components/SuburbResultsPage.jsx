import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

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
    api
      .fetchCoordinates(
        `${formatLocationName(suburb)}, ${formatLocationName(city)}`
      )
      .then((res) => {
        setLocation(res.features[0].center)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <Heading as="h1" size="lg" letterSpacing={'tighter'}>
        Listings for {formatLocationName(suburb)}, {formatLocationName(city)}
      </Heading>
      {location && <MapContainer location={location} />}
      <BusinessList />
    </>
  )
}

export default SuburbResultsPage
