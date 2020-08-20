import React from 'react'
import root from 'react-shadow'
import ListItem from '../ListItem/ListItem'

export default function List({ allItems }) {
  const preppedItems = allItems.map((el) => {
    return (
      <ListItem id={el.key} label={el.label} defaultChecked={el.completed} />
    )
  })

  return (
    <root.div>
      <ul>{preppedItems}</ul>
    </root.div>
  )
}
