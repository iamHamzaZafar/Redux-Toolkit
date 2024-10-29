import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { decrement, reset, incrementByAmount , incremet } from './features/counter/counterSlice';

function App() {
  const[amount , setAmount] = useState(0);
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch() ;

  return (
    <>
    <h1>This is the Basic Project which is Created using Redux Tool Kit </h1>
      <button onClick={()=>dispatch(incremet())} className='btn'>+</button>
      <h3 className='txt'>Count:{count}</h3>
      <button  onClick={()=>dispatch(decrement())} className='btn '>-</button>
      <br />
      <br />
      <button  onClick={()=>dispatch(reset())} className='btn'>Reset</button>
      <br />
      <br />
      <input className='input' onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder='Enter a number' type="number" />
      <br />
      <br />
      <button  onClick={()=>dispatch(incrementByAmount(amount))}   className='btn'>Inc By Amount</button>
    </>
  )
}

export default App
