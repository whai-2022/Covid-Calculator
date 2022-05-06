import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import BusinessListingPage from './BusinessListingPage'
<<<<<<< HEAD
import SearchPage from './SearchPage'
import MapContainer from './MapContainer'
=======
import SuburbResults from './SuburbResults'
>>>>>>> 2888980 (list map half working)

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
          element={<SuburbResults />}
        ></Route>
      </Routes>
    </>
  )
}

export default App
