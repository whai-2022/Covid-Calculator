import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'

function CitySelector() {
  const [city, setCity] = useState('')

  return (
    <>
      <Select
        variant="filled"
        placeholder="Choose a city"
        onChange={setCity((e) => e.target.value)}
      >
        <option value="auckland">Auckland</option>
        <option value="christchurch">Christchurch</option>
        <option value="wellington">Wellington</option>
      </Select>
    </>
  )
}

export default CitySelector
