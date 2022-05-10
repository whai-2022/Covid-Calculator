import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function ReliabilityScore({ reliabilityPositive, reliabilityNegative }) {
  console.log(reliabilityPositive, reliabilityNegative)
  const reliabilityScore = parseInt(
    (reliabilityPositive / (reliabilityPositive + reliabilityNegative)) * 100
  )
  return (
    <>
      <CircularProgress
        id="reliabilityScore"
        value={reliabilityScore}
        thickness={15}
        color="pink.200"
        capIsRound
      >
        <CircularProgressLabel>{`${reliabilityScore}%`}</CircularProgressLabel>
      </CircularProgress>
    </>
  )
}

export default ReliabilityScore
