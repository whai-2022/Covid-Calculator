import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import BusinessListingPage from './BusinessListingPage'
import SearchPage from './SearchPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={'home'}></Route>
        <Route path="businesses/:id" element={'business'}></Route>
        <Route path="cities" element={'cities'}></Route>
        <Route path="cities/:city" element={'city'}></Route>
        <Route path="cities/:city/:suburb" element={<SearchPage />}></Route>
      </Routes>
    </>
  )
}

export default App
