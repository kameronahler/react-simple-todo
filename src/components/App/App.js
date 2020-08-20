import React from 'react'
import root from 'react-shadow'

export default function App() {
  const formSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <root.div>
      <form onSubmit={formSubmit}>
        <label htmlFor='add-item'>Add Item</label>
        <input id='add-item' type='text' />
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
