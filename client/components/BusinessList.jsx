import React from 'react'
import api from '../apis'
import BusinessDetail from './BusinessDetail.jsx'

function BusinessList() {
  const businesses = api.fetchBusinesses()

  return (
    <>
      <div>
        {businesses.map((business) => (
          <BusinessDetail
            key={business.id}
            name={business.name}
            address={business.address}
            category={business.category}
            reliabilityScore={business.reliabilityScore}
            rating={business.rating}
          />
        ))}
      </div>
    </>
  )
}

export default BusinessList
