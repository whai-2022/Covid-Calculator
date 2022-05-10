import React from 'react'
import { HStack, Tag } from '@chakra-ui/react'

function ShowStat({ stat, titles }) {
  console.log(stat)
  return (
    <HStack direction="row" spacing={3}>
      {titles.map((title, i) => {
        console.log('pos', i)
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
