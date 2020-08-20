import React from 'react'
import root from 'react-shadow'
import ListItem from '../ListItem/ListItem'

export default function List({ allItems, changeItem }) {
  const preppedItems = allItems.map((el) => {
    return (
      <ListItem
        changeItem={changeItem}
        defaultChecked={el.completed}
        id={el.id}
        key={el.key}
        label={el.label}
      />
    )
  })

  return (
    <root.div>
      <ul>{preppedItems}</ul>
    </root.div>
  )
}
