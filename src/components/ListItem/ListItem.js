import React from 'react'
import root from 'react-shadow'

export default function ListItem({ changeItem, defaultChecked, id, label }) {
  return (
    <root.div>
      <li className={defaultChecked ? 'checked' : null}>
        <input
          defaultChecked={defaultChecked}
          id={id}
          onChange={changeItem}
          type='checkbox'
        />
        <label htmlFor={id}>{label}</label>
      </li>

      <style>{`
        .checked {
          opacity: .5;
        }
      `}</style>
    </root.div>
  )
}
