import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getBusinesses } from '../actions'
import BusinessDetail from './BusinessDetail.jsx'

function BusinessList() {
  const dispatch = useDispatch()
  const { city, suburb } = useParams()
  const formatLocationName = (locationName) =>
    locationName?.replace(/\s/g, '-').toLowerCase()

  const allBusinesses = useSelector((state) => state.businesses)

  useEffect(() => {
    dispatch(getBusinesses())
  }, [])

  const businesses = allBusinesses.filter((el) => {
    return (
      formatLocationName(el.city) == formatLocationName(city) &&
      formatLocationName(el.suburb) == formatLocationName(suburb)
    )
  })

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
            id={business.id}
          />
        ))}
      </div>
    </>
  )
}

export default BusinessList
