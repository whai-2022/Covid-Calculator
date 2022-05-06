import React, { useState } from 'react'
import SuburbSelector from './SuburbSelector'
import CitySelector from './CitySelector'

function CombinedSelector() {
  const [locationSelection, setlocationSelection] = useState({})

  return (
    <>
      <form action="">
        <SuburbSelector setState={setlocationSelection} />
        <CitySelector />
        <button onClick={handleSubmit}></button>
      </form>
    </>
  )
}

export default CombinedSelector
