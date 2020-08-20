import React from 'react'
import root from 'react-shadow'

export default function App() {
  return (
    <root.div>
      <h1>Hello World</h1>

      <style>{`
        h1 {
          font-size: 4rem;
        }
      `}</style>
    </root.div>
  )
}
