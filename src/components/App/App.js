import React, { useState } from 'react'
import root from 'react-shadow'

export default function App() {
  const formSubmit = (e) => {
    e.preventDefault()
  }

  const [stateItems, setStateItems] = useState([])
  const [stateInputValue, setStateInputValue] = useState('')

  const updateInputInput = (e) => {
    setStateInputValue(e.currentTarget.value)
  }

  return (
    <root.div>
      <form onSubmit={formSubmit}>
        <label htmlFor='add-item'>Add Item</label>
        <input
          id='add-item'
          onChange={updateInputInput}
          placeholder='New item'
          type='text'
          value={stateInputValue}
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
