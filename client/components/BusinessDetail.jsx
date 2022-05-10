import * as React from 'react'
import { Link } from 'react-router-dom'
import { Badge, Heading, Box, Center, Text } from '@chakra-ui/react'
import RatingScore from './RatingScore'
import ReliabilityScore from './ReliabilityScore'

function BusinessDetail({
  id,
  name,
  address,
  category,
  reliabilityPositive,
  reliabilityNegative,
  rating,
  showDetails,
}) {
  return (
    <Center>
      <Box p="5" borderWidth="1px" borderRadius="lg" mb="16px" w="100%">
        <Link to={`/businesses/${id}/`}>
          <Heading as="h2" size="md">
            {name}
          </Heading>
        </Link>
        <Text>{address}</Text>
        <Box>
          Rating: <RatingScore score={rating} />
        </Box>
        <Box>
          Reliability Score:{' '}
          <ReliabilityScore
            reliabilityPositive={reliabilityPositive}
            reliabilityNegative={reliabilityNegative}
          />{' '}
        </Box>
        {showDetails && (
          <Text fontSize="md">
            <Link to={`/businesses/${id}/`}>See details</Link>
          </Text>
        )}
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {category}
        </Badge>
      </Box>
    </Center>
  )
}

export default BusinessDetail
