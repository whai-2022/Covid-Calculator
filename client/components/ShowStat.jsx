import React from 'react'
import {
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { RiCheckboxFill, RiSubtractFill } from 'react-icons/ri'

function ShowStat({ stat, titles }) {
  function generateTag(title, i) {
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
  }

  return (
    <HStack direction="row" spacing={3}>
      {titles.map((title, i) => {
        return (
          <Popover key={title.name} trigger={'hover'} placement="top-start">
            <PopoverTrigger>{generateTag(title, i)}</PopoverTrigger>
            <PopoverContent
              color="white"
              bg="blue.600"
              borderColor="blue.600"
              w={'200px'}
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>{title.description}</PopoverBody>
            </PopoverContent>
          </Popover>
        )
      })}
    </HStack>
  )
}

export default ShowStat
