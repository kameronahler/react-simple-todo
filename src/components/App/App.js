import React, { useState } from 'react'
import root from 'react-shadow'
import Form from '../Form/Form'
import List from '../List/List'

export default function App() {
  const [allItems, setAllItems] = useState([])

  const addItem = (newItem) => {
    setAllItems([newItem, ...allItems])
  }

  const changeItem = (e) => {
    const newArr = allItems.map((el) => {
      if (e.currentTarget.id === el.id && el.completed === true) {
        el.completed = false
        return el
      } else if (e.currentTarget.id === el.id && el.completed === false) {
        el.completed = true
        return el
      } else {
        return el
      }
    })
    setAllItems(newArr)
  }

  return (
    <root.div>
      <Form action={addItem} />
      <List allItems={allItems} changeItem={changeItem} />
    </root.div>
  )
}
