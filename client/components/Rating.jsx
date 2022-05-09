import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { evaluate } from 'mathjs'
import RatingScore from './RatingScore'
import { setRating } from '../actions'

function Rating(props) {
  const dispatch = useDispatch()
  const safetyData = props.safetyData
  const {
    cleaningProtocol,
    handSanitizer,
    masking,
    minSpacing,
    // vaccinePass,
    // vaccineStaff,
    ventilation,
  } = safetyData

  const cleaningSet = [1, 1 / 2]
  const handSet = [1, 1 / 2]
  const maskingSet = [1, 0.33, 0.25, 0.166, 0.0625]
  const spacingSet = [1, 0.5, 0.25]
  // const vaccinePassSet = [1, 1]
  // const vaccineStaffSet = [1, 1]
  const ventilationSet = [1, 0.25, 0.05]

  const cleaningMult = cleaningSet[cleaningProtocol]
  const handMult = handSet[handSanitizer]
  const maskingMult = maskingSet[masking]
  const spacingMult = spacingSet[minSpacing]
  // const vaccinePassMult = vaccinePassSet[vaccinePass]
  // const vaccineStaffMult = vaccineStaffSet[vaccineStaff]
  const ventilationMult = ventilationSet[ventilation]

  const baseRisk = 100

  function calculateRisk() {
    const risk = evaluate(
      cleaningMult * 5 +
        handMult * 5 +
        maskingMult * 30 +
        spacingMult * 30 +
        // vaccinePassMult * 10 +
        // vaccineStaffMult * 10 +
        ventilationMult * 30
    )
    const score = Math.trunc(baseRisk - risk)
    dispatch(setRating(safetyData.id, score))
    return score
  }

  let score = null
  if (Object.keys(safetyData).length !== 0) score = calculateRisk()

  return (
    <>
      <Heading as="h2" size="lg" letterSpacing={'tighter'}>
        Safety Rating:
      </Heading>
      {score != null && <RatingScore score={score} />}
    </>
  )
}

export default Rating
