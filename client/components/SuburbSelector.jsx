import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'

function SuburbSelector() {
  const [suburb, setSuburb] = useState('')

  return (
    <>
      <Select
        variant="filled"
        placeholder="Choose a suburb"
        onChange={setSuburb((e) => e.target.value)}
      >
        <option value="cbd">CBD</option>
        <option value="greyLynn">Grey Lynn</option>
        <option value="herneBay">Herne Bay</option>
        <option value="pointChevalier">Point Chevalier</option>
        <option value="ponsonby">Ponsonby</option>
      </Select>
    </>
  )
}

export default SuburbSelector
