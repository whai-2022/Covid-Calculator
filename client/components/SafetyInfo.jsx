import React from 'react'
import { Box, Heading, Text, Badge } from '@chakra-ui/react'
import ShowStat from './ShowStat'

import safetyOptions from '../data/safetyOptions.json'

function SafetyInfo({ business }) {
  return (
    <>
      <Box p="5" borderWidth="1px" borderRadius="lg" mb="16px" w="100%">
        <Heading as="h2" size="md" letterSpacing={'tighter'}>
          Safety info:
        </Heading>
        <Box direction="row">
          <Text>Cleaning Protocols: </Text>
          {business.vaccineStaff ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              In place
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Not in place
            </Badge>
          )}
        </Box>
        <Box direction="row">
          <Text>Hand Sanitiser Availability for Customer/Visitor Use: </Text>
          {business.handsanitizer ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Avaliable
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Not Avaliable
            </Badge>
          )}
        </Box>
        <Box direction="row">
          <Text>Mask Protocols for Staff: </Text>
          <ShowStat
            stat={business.masking}
            titles={safetyOptions.masking.options}
          />
        </Box>
        <Box direction="row">
          <Text>Minimum Spacing Between Customers/Visitors: </Text>
          <ShowStat
            stat={business.minSpacing}
            titles={safetyOptions.minSpacing.options}
          />
        </Box>
        <Box direction="row">
          <Text>Ventilation on Site: </Text>
          <ShowStat
            stat={business.ventilation}
            titles={safetyOptions.ventilation.options}
          />
        </Box>
        <Box direction="row">
          <Text>Vaccination Pass Requirements for Customers/Visitors: </Text>
          {business.vaccinePass ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Visitor vaccination pass required
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Visitor vaccination pass not required
            </Badge>
          )}
        </Box>
        <Box direction="row">
          <Text>Staff Vaccination Requirements: </Text>
          {business.vaccineStaff ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Staff vaccinations required
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Staff vaccinations not required
            </Badge>
          )}
        </Box>
      </Box>
    </>
  )
}

export default SafetyInfo
