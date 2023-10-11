import { useState } from 'react'
import './App.css'

function App({name}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, {name}</h1>
    </>
  )
}

export default App
