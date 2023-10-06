import { useState } from 'react'
import { Counter } from "./components/Counter";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
            <Counter />
      </div>
      
    </>
  )
}

export default App
