import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function RatingScore({ score }) {
  return (
    <>
      <CircularProgress
        value={score}
        thickness={15}
        color="green.400"
        capIsRound
      >
        <CircularProgressLabel>{`${score}%`}</CircularProgressLabel>
      </CircularProgress>
    </>
  )
}

export default RatingScore
