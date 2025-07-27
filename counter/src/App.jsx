import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const addVal = () =>{
    setCount(count + 1);
  }

  const subVal = () =>{
    setCount(count - 1);
  }

  return (
    <>
      <h1>countrt</h1>
      <h2>{count}</h2>
      <button
      onClick={addVal}
      >add value</button><br/>
      <button
      onClick={subVal}>remove value</button>
    </>
  )
}

export default App
