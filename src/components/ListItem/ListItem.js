import React from 'react'
import root from 'react-shadow'

export default function ListItem({ id, label, defaultChecked }) {
  return (
    <root.div>
      <li>
        <input id={id} defaultChecked={defaultChecked} type='checkbox' />
        <label htmlFor={id}>{label}</label>
      </li>
    </root.div>
  )
}
