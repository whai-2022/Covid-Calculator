import React from 'react'
import { Link } from 'react-router-dom'
import {
  Heading,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react'

import locations from '../data/locations.json'

function CitiesSuburbs() {
  function createCities() {
    const cities = Object.keys(locations)
    return (
      <SimpleGrid minChildWidth="250px" columns={cities.length} spacingX={10}>
        {cities.map((city) => {
          return (
            <Box key={city} padding={5}>
              {createList(city)}
            </Box>
          )
        })}
      </SimpleGrid>
    )
  }

  function createList(city) {
    return (
      <>
        <Heading as="h2" size="xl" letterSpacing={'tighter'}>
          {city}
        </Heading>
        <UnorderedList padding={5}>
          {locations[city].map((suburb) => {
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
    <>
      <Heading as="h1" size="lg" letterSpacing={'tighter'}>
        Cities and Suburbs
      </Heading>
      {createCities()}
    </>
  )
}

export default CitiesSuburbs
