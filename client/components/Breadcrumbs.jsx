import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'

function Breadcrumbs() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  const formatLocationName = (locationName) => {
    return locationName
      ?.replace(/-/g, ' ')
      .split(' ')
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .join(' ')
  }

  return (
    <>
      <Breadcrumb spacing="3px" separator={<BiChevronRight color="gray.500" />}>
        {pathname == '/'
          ? ''
          : splitLocation.map((location, i) => {
              return (
                <BreadcrumbItem key={location + i}>
                  <BreadcrumbLink
                    as={Link}
                    to={splitLocation.slice(0, i + 1).join('/')}
                  >
                    <Text>
                      {location == '' ? 'Home' : formatLocationName(location)}
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )
            })}
      </Breadcrumb>
    </>
  )
}

export default Breadcrumbs
