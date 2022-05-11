import React from 'react'
import { Box, Heading, Text, Badge } from '@chakra-ui/react'
import ShowStat from './ShowStat'

import safetyOptions from '../data/safetyOptions.json'

function SafetyInfo({ business }) {
  return (
    <>
      <Box p="5" borderWidth="1px" borderRadius="lg" mb="16px" w="100%">
        <Heading as="h2" size="lg">
          Safety info:
        </Heading>
        <Box direction="row" p={2}>
          <Heading as="h5" size="md" letterSpacing={'tighter'}>
            Cleaning Protocols:
          </Heading>
          <Text fontSize="xl">{safetyOptions.cleaning.description}</Text>
          {business.vaccineStaff ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              In place
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Not in place
            </Badge>
          )}
          <Text fontSize="sm">
            <a href="#">See more information:</a>
          </Text>
        </Box>
        <Box direction="row" p={2}>
          <Heading as="h5" size="md" letterSpacing={'tighter'}>
            Hand Sanitiser Availability for Customer/Visitor Use:
          </Heading>
          <Text fontSize="xl">{safetyOptions.handSanitizer.description}</Text>
          {business.handsanitizer ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Avaliable
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Not Avaliable
            </Badge>
          )}
          <Text fontSize="sm">
            <a href="#">See more information:</a>
          </Text>
        </Box>
        <Box direction="row" p={2}>
          <Heading as="h5" size="md" letterSpacing={'tighter'}>
            Mask Protocols for Staff:
          </Heading>
          <Text fontSize="xl">{safetyOptions.masking.description}</Text>
          <ShowStat
            stat={business.masking}
            titles={safetyOptions.masking.options}
          />
          <Text fontSize="sm">
            <a href="#">See more information:</a>
          </Text>
        </Box>
        <Box direction="row" p={2}>
          <Heading as="h5" size="md" letterSpacing={'tighter'}>
            Minimum Spacing Between Customers/Visitors:
          </Heading>
          <Text fontSize="xl">{safetyOptions.minSpacing.description}</Text>
          <ShowStat
            stat={business.minSpacing}
            titles={safetyOptions.minSpacing.options}
          />
          <Text fontSize="sm">
            <a href="#">See more information:</a>
          </Text>
        </Box>
        <Box direction="row" p={2}>
          <Heading as="h5" size="md" letterSpacing={'tighter'}>
            Ventilation on Site:
          </Heading>
          <Text fontSize="xl">{safetyOptions.ventilation.description}</Text>
          <ShowStat
            stat={business.ventilation}
            titles={safetyOptions.ventilation.options}
          />
          <Text fontSize="sm">
            <a href="#">See more information:</a>
          </Text>
        </Box>
        <Box direction="row" p={2}>
          <Heading as="h5" size="md" letterSpacing={'tighter'}>
            Vaccination Pass Requirements for Customers/Visitors:
          </Heading>
          <Text fontSize="xl">{safetyOptions.vaccinePass.description}</Text>
          {business.vaccinePass ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Visitor vaccination pass required
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Visitor vaccination pass not required
            </Badge>
          )}
          <Text fontSize="sm">
            <a href="#">See more information:</a>
          </Text>
        </Box>
        <Box direction="row" p={2}>
          <Heading as="h5" size="md" letterSpacing={'tighter'}>
            Staff Vaccination Requirements:
          </Heading>
          <Text fontSize="xl">
            {safetyOptions.vaccineRequirement.description}
          </Text>
          {business.vaccineStaff ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Staff vaccinations required
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Staff vaccinations not required
            </Badge>
          )}
          <Text fontSize="sm">
            <a href="#">See more information:</a>
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default SafetyInfo
