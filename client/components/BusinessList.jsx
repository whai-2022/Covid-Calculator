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

  // TODO: what does the empty state of this look like? Can the user distinguish between:
  //  1. There are no businesses in this location
  //  2. There are no businesses in the world!
  //  3. There might be businesses, I'm waiting for them to load
  //  4. I tried loading businesses, but it failed
  return (
    <>
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
    </>
  )
}

export default BusinessList
