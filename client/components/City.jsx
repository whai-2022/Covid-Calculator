import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Heading,
  UnorderedList,
  ListItem,
  Box,
  Flex,
  Img,
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
        <Heading as="h2" size="xl" letterSpacing={'tighter'}>
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
    <Flex justifyContent="space-evenly">
      <Box key={currentCity} padding={5}>
        {createList(currentCity)}
      </Box>
      {/* <AspectRatio ratio={1}>*/}
      <Img src={`/images/${currentCity}.jpeg`} borderRadius="60px" w="50%" />
      {/* </AspectRatio> */}
    </Flex>
  )
}

export default City
