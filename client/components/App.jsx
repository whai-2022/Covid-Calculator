import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Box } from '@chakra-ui/react'

import Navbar from './Navbar'
import HomeSplash from './HomeSplash'
import BusinessListingPage from './BusinessListingPage'
import CitiesSuburbs from './CitiesSuburbs'
import SearchPage from './SearchPage'

function App() {
  return (
    <>
      <Container
        w="100%"
        maxW="100%"
        minH="100vh"
        bg="blue.100"
        p={0}
        display="flex"
        flexDirection="column"
        align="flex-start"
      >
        <Navbar />
        <Container w="100%" maxW="100%" flexGrow="1" centerContent>
          <Box
            width={{ base: 'full', md: '80%' }}
            maxW="1600px"
            flexGrow="1"
            bg="white"
            p={5}
          >
            <Routes>
              <Route exact path="/" element={<HomeSplash />}></Route>
              <Route
                exact
                path="businesses/:id"
                element={<BusinessListingPage />}
              ></Route>
              <Route exact path="cities" element={<CitiesSuburbs />}></Route>
              <Route exact path="cities/:city" element={'city'}></Route>
              <Route
                exact
                path="cities/:city/:suburb"
                element={<SearchPage />}
              ></Route>
            </Routes>
          </Box>
        </Container>
      </Container>
    </>
  )
}

export default App
