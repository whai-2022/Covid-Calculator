import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Heading, SimpleGrid, Container, Center } from '@chakra-ui/react'

import BusinessList from './BusinessList'
import MapContainer from './MapContainer'
import CategorySelector from './CategorySelector'
import PhoneSelectIcon from './PhoneSelectIcon'
import { setError } from '../actions'

import api from '../apis'

function SuburbResultsPage() {
  const dispatch = useDispatch()
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
        dispatch(setError(err))
        console.error('Unable to find suburb location')
      })
  }, [])

  const [businessCategory, setBusinessCategory] = useState('')

  function handleCategoryChange(evt) {
    setBusinessCategory(evt.target.value)
  }

  return (
    <>
      <Heading
        marginTop="50"
        as="h1"
        size="xl"
        mb="10"
        textAlign="center"
        color="blue.900"
      >
        Listings for {formatLocationName(suburb)}, {formatLocationName(city)}
      </Heading>
      <SimpleGrid
        minChildWidth="500px"
        columns={2}
        spacingY={10}
        marginTop={10}
      >
        <Container colSpan={2} centerContent>
          {location && <MapContainer w="500px" location={location} />}
          <Center>
            <Container
              marginTop="50px"
              padding="50px"
              w="600px"
              centerContent
              borderWidth="1px"
              borderRadius="lg"
              shadow="md"
            >
              <Heading marginBottom="20px" color="blue.900">
                Select a business to see more safety information
              </Heading>
              <PhoneSelectIcon />
            </Container>
          </Center>
        </Container>
        <Container w="400px" centerContent>
          <CategorySelector handleCategoryChange={handleCategoryChange} />
          <BusinessList businessCategory={businessCategory} />
        </Container>
      </SimpleGrid>
    </>
  )
}

export default SuburbResultsPage
