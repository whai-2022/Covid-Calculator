import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Box } from '@chakra-ui/react'

import Navbar from './Navbar'
import HomeSplash from './HomeSplash'
import Breadcrumbs from './Breadcrumbs'
import BusinessListingPage from './BusinessListingPage'
import SuburbResultsPage from './SuburbResultsPage'
import CitiesSuburbs from './CitiesSuburbs'
import City from './City'
import Footer from './Footer'

function App() {
  return (
    <>
      <Container
        w="100%"
        maxW="100%"
        minH="100vh"
        bg="blue.90"
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
            <Breadcrumbs key={window.location.pathname} />
            <Routes>
              <Route exact path="/" element={<HomeSplash />}></Route>
              <Route
                exact
                path="businesses/:id"
                element={<BusinessListingPage />}
              ></Route>
              <Route exact path="cities" element={<CitiesSuburbs />}></Route>
              <Route exact path="cities/:city" element={<City />}></Route>
              <Route
                exact
                path="cities/:city/:suburb"
                element={<SuburbResultsPage />}
              ></Route>
            </Routes>
          </Box>
        </Container>
        <Footer />
      </Container>
    </>
  )
}

export default App
