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
  let { pathname } = location
  if (pathname[pathname.length - 1] == '/') pathname = pathname.slice(0, -1)
  let splitLocation = pathname.split('/')
  if (!isNaN(splitLocation[splitLocation.length - 1])) {
    splitLocation[splitLocation.length - 2] +=
      '/' + splitLocation[splitLocation.length - 1]
    splitLocation.splice(-1)
  }

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
        {pathname == ''
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
