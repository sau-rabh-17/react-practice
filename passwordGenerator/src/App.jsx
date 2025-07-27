import { useState, useCallback, useEffect, useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [Password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) {
      str += "0123456789";
    }
    if(symbolAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?`~";
    }
    for(let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[
    length,
    numberAllowed,
    symbolAllowed,
    setPassword
  ])

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(Password);
  },[Password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 my-8 text-orange-500 bg-gray-100'>
        <h1 className='text-center font-bold'>passwordGenerator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={Password}
            placeholder='Generated Password'
            className='outline-none w-full py-1 px-3'
            ref={passwordRef}
            
          />
          <button className='bg-orange-500 text-white py-1 px-3'
          
            onClick={copyPassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-gray-700'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label className='text-gray-700'>Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={symbolAllowed}
            onChange={(e) => setSymbolAllowed(e.target.checked)}
            />
            <label className='text-gray-700'>Include Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
