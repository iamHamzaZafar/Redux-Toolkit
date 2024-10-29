import { useState } from 'react'
import './App.css'

function App() {
  const[amount , setAmount] = useState(0);

  return (
    <>
      <button className='btn'>+</button>
      <h3 className='txt'>Count:</h3>
      <button className='btn '>-</button>
      <br />
      <br />
      <button className='btn'>Reset</button>
      <br />
      <br />
      <input className='input' onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder='Enter a number' type="number" />
      <br />
      <br />
      <button className='btn'>Inc By Amount</button>
    </>
  )
}

export default App
