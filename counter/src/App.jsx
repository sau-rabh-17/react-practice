import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const addVal = () =>{
    if(count + 1 > 20){
      setCount(0);
    } else{
      setCount(count+1);
    }
    
    console.log(count);
  }

  return (
    <>
      <h1>countrt</h1>
      <h2>{count}</h2>
      <button
      onClick={addVal}
      >add value</button><br/>
      <button>remove value</button>
    </>
  )
}

export default App
