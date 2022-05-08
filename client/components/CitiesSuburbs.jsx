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
      <SimpleGrid minChildWidth="250px" columns={3} spacingX={10}>
        <Box padding={5}>{createList('Auckland')}</Box>
        <Box padding={5}>{createList('Wellington')}</Box>
        <Box padding={5}>{createList('Christchurch')}</Box>
      </SimpleGrid>
    </>
  )
}

export default CitiesSuburbs
