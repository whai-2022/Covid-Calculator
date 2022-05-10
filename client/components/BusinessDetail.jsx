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
}) {
  console.log(
    id,
    name,
    address,
    category,
    reliabilityPositive,
    reliabilityNegative,
    rating
  )
  return (
    <Center>
      <Box p="5" borderWidth="1px" borderRadius="lg" mb="16px" w="100%">
        <Link to={`/businesses/${id}/`}>
          <Heading as="h2" size="md">
            {name}
          </Heading>
        </Link>
        <Text>{address}</Text>
        <Text fontSize="md">
          Rating: <RatingScore score={rating} />
        </Text>
        <Text>
          Reliability Score:{' '}
          <ReliabilityScore
            reliabilityPositive={reliabilityPositive}
            reliabilityNegative={reliabilityNegative}
          />{' '}
        </Text>
        <Text fontSize="md">
          <Link to={`/businesses/${id}/`}>See details</Link>
        </Text>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {category}
        </Badge>
      </Box>
    </Center>
  )
}

export default BusinessDetail
