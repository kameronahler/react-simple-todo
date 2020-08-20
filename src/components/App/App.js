import React, { useState } from 'react'
import root from 'react-shadow'
import { v4 as uuid } from 'uuid'

export default function App() {
  const [totalItems, setTotalItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const updateInput = (e) => {
    setInputValue(e.currentTarget.value)
  }

  const formSubmit = (e) => {
    e.preventDefault()

    setTotalItems([
      {
        id: uuid(),
        label: inputValue,
        completed: false,
      },
      ...totalItems,
    ])
  }

  // debug
  console.log(totalItems)

  return (
    <root.div>
      <form onSubmit={formSubmit}>
        <label htmlFor='add-item'>Add Item</label>
        <input
          id='add-item'
          onChange={updateInput}
          placeholder='New item'
          type='text'
          value={inputValue}
        />
        <input type='submit' value='Add' />
      </form>
      <ul></ul>

      <style>{`
        label {
          display: block;
        }
      `}</style>
    </root.div>
  )
}
