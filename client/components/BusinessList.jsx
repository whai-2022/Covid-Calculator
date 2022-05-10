import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Stack, Button, Text } from '@chakra-ui/react'

import { getBusinesses } from '../actions'
import BusinessDetail from './BusinessDetail.jsx'

function BusinessList(props) {
  const dispatch = useDispatch()
  const { city, suburb } = useParams()
  let [active, setActive] = useState('default')

  const formatLocationName = (locationName) =>
    locationName?.replace(/\s/g, '-').toLowerCase()

  const allBusinesses = useSelector((state) => state.businesses)

  useEffect(() => {
    dispatch(getBusinesses())
  }, [])

  const businesses = allBusinesses.filter((el) => {
    if (props.businessCategory) {
      return (
        formatLocationName(el.city) == formatLocationName(city) &&
        formatLocationName(el.suburb) == formatLocationName(suburb) &&
        el.category == props.businessCategory
      )
    } else {
      return (
        formatLocationName(el.city) == formatLocationName(city) &&
        formatLocationName(el.suburb) == formatLocationName(suburb)
      )
    }
  })

  function sortChoice(a, b) {
    if (active == 'default') return a.props.name.localeCompare(b.props.name)
    else return a.props.rating < b.props.rating ? 1 : -1
  }

  return (
    <>
      <Stack direction="row" spacing={2} m={2} align="center">
        <Text>Sort By:</Text>
        <Button
          id={active == 'default' ? 'selected' : 'unselected'}
          colorScheme="teal"
          onClick={() => setActive('default')}
          variant={active == 'default' ? 'solid' : 'outline'}
        >
          Alphabetical
        </Button>
        <Button
          id={active != 'default' ? 'selected' : 'unselected'}
          colorScheme="teal"
          onClick={() => setActive('alpha')}
          variant={active != 'default' ? 'solid' : 'outline'}
        >
          Rating
        </Button>
      </Stack>
      {businesses
        .map((business) => (
          <BusinessDetail
            key={business.id}
            name={business.name}
            address={business.address}
            category={business.category}
            reliabilityPositive={business.reliabilityPositive}
            reliabilityNegative={business.reliabilityNegative}
            rating={business.rating}
            id={business.id}
            showDetails={true}
          />
        ))
        .sort(sortChoice)}
    </>
  )
}

export default BusinessList
