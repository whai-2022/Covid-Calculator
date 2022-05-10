import React from 'react'
import {
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from '@chakra-ui/react'
import { RiCheckboxFill, RiSubtractFill } from 'react-icons/ri'

function ShowStat({ stat, titles }) {
  return (
    <HStack direction="row" spacing={3}>
      {titles.map((title, i) => {
        return (
          <Tag
            p={3}
            size={i == stat ? 'lg' : 'md'}
            key={title.name}
            variant={i == stat ? 'solid' : 'solid'}
            colorScheme={i == stat ? 'teal' : 'gray'}
            opacity={i == stat ? '1' : '0.4'}
          >
            <TagLeftIcon
              boxSize={i == stat ? '20px' : '0.001px'}
              as={i == stat ? RiCheckboxFill : RiSubtractFill}
              opacity={i == stat ? '1' : '0'}
            />

            <TagLabel>{title.name}</TagLabel>
            <TagRightIcon
              boxSize={'0.001px'}
              as={RiSubtractFill}
              opacity="0"
            ></TagRightIcon>
          </Tag>
        )
      })}
    </HStack>
  )
}

export default ShowStat
