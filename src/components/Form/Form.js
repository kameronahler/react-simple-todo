import React, { useState, useEffect } from 'react'
import root from 'react-shadow'
import { v4 as uuid } from 'uuid'

export default function Form({ action }) {
  const NEW_ITEM_TEMPLATE = {
    completed: false,
    id: uuid(),
    label: '',
  }
  const [inProgressItem, setInProgressItem] = useState(NEW_ITEM_TEMPLATE)

  const inputUpdate = (e) => {
    setInProgressItem({ ...inProgressItem, label: e.target.value })
  }

  const formSubmit = (e) => {
    e.preventDefault()

    if (inProgressItem.label.trim()) {
      action(inProgressItem)
      setInProgressItem(NEW_ITEM_TEMPLATE)
    }
  }

  // debug
  useEffect(() => {
    console.log('inProgressItem:')
    console.log(inProgressItem)
  })

  return (
    <root.div>
      <form onSubmit={formSubmit}>
        <label htmlFor='add-item'>Add Item</label>
        <input
          id='add-item'
          onChange={inputUpdate}
          placeholder='New item'
          value={inProgressItem.label}
          type='text'
        />
        <input type='submit' value='Add' />
      </form>

      <style>{`
        label {
          display: block;
        }
      `}</style>
    </root.div>
  )
}
