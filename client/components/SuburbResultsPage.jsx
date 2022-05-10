import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading, Flex, Box } from '@chakra-ui/react'

import BusinessList from './BusinessList'
import MapContainer from './MapContainer'
import CategorySelector from './CategorySelector'

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
        return setLocation(res.features[0].center)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const [businessCategory, setBusinessCategory] = useState('')

  function handleCategoryChange(evt) {
    setBusinessCategory(evt.target.value)
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
          {location && <MapContainer w="100%" location={location} />}
        </Box>
        <Box>
          <CategorySelector handleCategoryChange={handleCategoryChange} />
          <BusinessList businessCategory={businessCategory} />
        </Box>
      </Flex>
    </>
  )
}

export default SuburbResultsPage
