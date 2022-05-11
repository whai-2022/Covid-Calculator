import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Heading,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Box,
  Img,
  Center,
  HStack,
  Link,
} from '@chakra-ui/react'

import locations from '../data/locations.json'
import PhoneIcon from './PhoneIcon'

function CitiesSuburbs() {
  function createCities() {
    const cities = Object.keys(locations)
    return (
      <SimpleGrid
        minChildWidth="250px"
        columns={cities.length}
        spacingX={10}
        justifyItems="center"
      >
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
        <Link as={RouterLink} to={`/cities/${city}`} color="blue.900">
          <Heading as="h2" size="xl" letterSpacing={'tighter'}>
            {city}
          </Heading>
        </Link>
        <UnorderedList padding={5}>
          {locations[city].map((suburb) => {
            return (
              <ListItem key={suburb} fontSize="2xl">
                <Link
                  as={RouterLink}
                  to={`/cities/${formatName(city)}/${formatName(suburb)}`}
                >
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
      <Box
        w="full"
        bg="rgb(217, 234, 242, .5)"
        py="30px"
        mt="20px"
        borderRadius="20px"
      >
        <Heading
          as="h1"
          size="lg"
          pl="10"
          letterSpacing={'tighter'}
          color="blue.900"
        >
          Cities and Suburbs
        </Heading>

        {createCities()}
        <Box maxW="900px">
          <HStack>
            <PhoneIcon />
            <Heading color="blue.900">
              Select a city or suburb to find safe businesses nearby
            </Heading>
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default CitiesSuburbs
