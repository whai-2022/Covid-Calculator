import React from 'react'
import { HStack, Tag } from '@chakra-ui/react'

function ShowStat({ stat, titles }) {
  return (
    <HStack direction="row" spacing={3}>
      {titles.map((title, i) => {
        return (
          <Tag
            p={3}
            size={'md'}
            key={title}
            variant={i == stat ? 'solid' : 'outline'}
            colorScheme="teal"
          >
            {title}
          </Tag>
        )
      })}
    </HStack>
  )
}

export default ShowStat
