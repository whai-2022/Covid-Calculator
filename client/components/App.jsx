import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import BusinessListingPage from './BusinessListingPage'
import SuburbResultsPage from './SuburbResultsPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={'home'}></Route>
        <Route
          exact
          path="businesses/:id"
          element={<BusinessListingPage />}
        ></Route>
        <Route exact path="cities" element={'cities'}></Route>
        <Route exact path="cities/:city" element={'city'}></Route>
        <Route
          exact
          path="cities/:city/:suburb"
          element={<SuburbResultsPage />}
        ></Route>
      </Routes>
    </>
  )
}

export default App
