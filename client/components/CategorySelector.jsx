import React from 'react'
import { useSelector } from 'react-redux'
import { Select } from '@chakra-ui/react'

function CategorySelector(props) {
  const businesses = useSelector((state) => state.businesses)
  const categoryList = {}
  businesses.map((business) => {
    if (business.category == categoryList[business.category]) {
      return
    } else {
      categoryList[business.category] = 1
      return
    }
  })
  const categories = Object.keys(categoryList)

  return (
    <Select
      data-testid="select"
      onChange={props.handleCategoryChange}
      variant="filled"
      bg="teal.100"
      placeholder="Choose a category"
      mb="16px"
    >
      {categories.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        )
      })}
    </Select>
  )
}

export default CategorySelector
