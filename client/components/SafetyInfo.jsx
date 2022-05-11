import React from 'react'
import { Box, Heading, Text, Badge, SimpleGrid } from '@chakra-ui/react'
import ShowStat from './ShowStat'

import safetyOptions from '../data/safetyOptions.json'

function SafetyInfo({ business }) {
  return (
    <>
      <Box p="5" borderWidth="0px" borderRadius="lg" mb="16px" w="100%">
        {/* <Center> */}
        <Heading marginBottom="10px" as="h2" size="lg" color="black">
          Safety info
        </Heading>
        {/* </Center> */}
        <Box direction="row" p={2}>
          <Heading
            marginBottom="8px"
            as="h5"
            size="md"
            letterSpacing={'tighter'}
          >
            Mask Protocols for Staff:
          </Heading>
          <Text fontSize="xl">{safetyOptions.masking.description}</Text>
          <ShowStat
            stat={business.masking}
            titles={safetyOptions.masking.options}
          />
        </Box>
        <Box direction="row" p={2}>
          <Heading
            marginBottom="8px"
            as="h5"
            size="md"
            letterSpacing={'tighter'}
          >
            Minimum Spacing Between Customers/Visitors:
          </Heading>
          <Text fontSize="xl">{safetyOptions.minSpacing.description}</Text>
          <ShowStat
            stat={business.minSpacing}
            titles={safetyOptions.minSpacing.options}
          />
        </Box>
        <Box direction="row" p={2}>
          <Heading
            marginBottom="8px"
            as="h5"
            size="md"
            letterSpacing={'tighter'}
          >
            Ventilation on Site:
          </Heading>
          <Text fontSize="xl">{safetyOptions.ventilation.description}</Text>
          <ShowStat
            stat={business.ventilation}
            titles={safetyOptions.ventilation.options}
          />
        </Box>
        <SimpleGrid minChildWidth="250px" columns={2} spacingX={10}>
          <Box direction="row" borderWidth="1px" borderRadius="md" m={2} p={2}>
            <Heading
              marginBottom="8px"
              as="h5"
              size="md"
              letterSpacing={'tighter'}
            >
              Cleaning Protocols:
            </Heading>
            <Text fontSize="xl">{safetyOptions.cleaning.description}</Text>
            {business.vaccineStaff ? (
              <Badge borderRadius="full" px="2" size="xl" colorScheme="blue">
                In place
              </Badge>
            ) : (
              <Badge borderRadius="full" px="2" size="xl" colorScheme="orange">
                Not in place
              </Badge>
            )}
          </Box>
          <Box direction="row" borderWidth="1px" borderRadius="md" m={2} p={2}>
            <Heading
              marginBottom="8px"
              as="h5"
              size="md"
              letterSpacing={'tighter'}
            >
              Hand Sanitiser Availability for Customer Use:
            </Heading>
            <Text fontSize="xl">{safetyOptions.handSanitizer.description}</Text>
            {business.handsanitizer ? (
              <Badge borderRadius="full" px="2" colorScheme="blue">
                Avaliable
              </Badge>
            ) : (
              <Badge borderRadius="full" px="2" colorScheme="orange">
                Not Avaliable
              </Badge>
            )}
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth="250px" columns={2} spacingX={10}>
          <Box direction="row" borderWidth="1px" borderRadius="md" m={2} p={2}>
            <Heading
              marginBottom="8px"
              as="h5"
              size="md"
              letterSpacing={'tighter'}
            >
              Vaccination Pass Requirements for Customers/Visitors:
            </Heading>
            <Text fontSize="xl">{safetyOptions.vaccinePass.description}</Text>
            {business.vaccinePass ? (
              <Badge borderRadius="full" px="2" colorScheme="blue">
                Visitor vaccination pass required
              </Badge>
            ) : (
              <Badge borderRadius="full" px="2" colorScheme="orange">
                Visitor vaccination pass not required
              </Badge>
            )}
          </Box>
          <Box direction="row" borderWidth="1px" borderRadius="md" m={2} p={2}>
            <Heading
              marginBottom="8px"
              as="h5"
              size="md"
              letterSpacing={'tighter'}
            >
              Staff Vaccination Requirements:
            </Heading>
            <Text fontSize="xl">
              {safetyOptions.vaccineRequirement.description}
            </Text>
            {business.vaccineStaff ? (
              <Badge borderRadius="full" px="2" colorScheme="blue">
                Staff vaccinations required
              </Badge>
            ) : (
              <Badge borderRadius="full" px="2" colorScheme="orange">
                Staff vaccinations not required
              </Badge>
            )}
          </Box>
        </SimpleGrid>
      </Box>
    </>
  )
}

export default SafetyInfo
