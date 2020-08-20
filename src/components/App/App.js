import React, { useState, useEffect } from 'react'
import root from 'react-shadow'
import Form from '../Form/Form'
import List from '../List/List'

export default function App() {
  const [allItems, setAllItems] = useState([])

  const addItem = (newItem) => {
    setAllItems([newItem, ...allItems])
  }

  // debug
  useEffect(() => {
    console.log('allItems:')
    console.log(allItems)
  })

  return (
    <root.div>
      <Form action={addItem} />
      <List allItems={allItems} />
    </root.div>
  )
}
