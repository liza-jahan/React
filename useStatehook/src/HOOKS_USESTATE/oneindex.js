import React ,{useState}from 'react'

export default function Oneindex() {
  const [count,setCount]= useState(0)
  const hendelIncrememt =()=>
  {
    setCount(count+1);
  }
  return (
    <div>
    <h1>Count:{count}</h1>
      <button onClick={hendelIncrememt}>Increment</button>
    </div>
  )
}
