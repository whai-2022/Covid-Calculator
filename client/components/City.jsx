import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Heading,
  UnorderedList,
  ListItem,
  Box,
  Img,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react'

import locations from '../data/locations.json'

function City() {
  const { city } = useParams()

  const formatLocationName = (locationName) => {
    return locationName
      ?.replace(/-/g, ' ')
      .split(' ')
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .join(' ')
  }

  const currentCity = formatLocationName(city)

  function createList(cityData) {
    return (
      <>
        <Heading as="h2" size="xl" color="blue.900" letterSpacing={'tighter'}>
          {cityData}
        </Heading>
        <UnorderedList padding={5}>
          {locations[cityData].map((suburb) => {
            return (
              <ListItem key={suburb} fontSize="2xl">
                <Link to={`/cities/${formatName(city)}/${formatName(suburb)}`}>
                  {suburb}
                </Link>
              </ListItem>
            )
          })}
        </UnorderedList>
      </>
    )
  }

  function formatName(name) {
    return name.replace(/ /g, '-').toLowerCase()
  }

  return (
    <Center>
      <Wrap justify="center" spacing={10}>
        <WrapItem>
          <Box key={currentCity} padding={5}>
            {createList(currentCity)}
          </Box>
        </WrapItem>
        <WrapItem>
          <Img
            src={`/images/${formatName(currentCity)}.jpeg`}
            borderRadius="60px"
            w={{ base: '700px', xl: '800px' }}
          />
        </WrapItem>
      </Wrap>
    </Center>
  )
}

export default City
