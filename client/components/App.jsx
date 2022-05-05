import React from 'react'
import Navbar from './Navbar'
import BusinessListingPage from './BusinessListingPage'

function App() {
  return (
    <>
      <Navbar />
      <header className="header"></header>
      <section className="main">
        <BusinessListingPage />
      </section>
    </>
  )
}

export default App
