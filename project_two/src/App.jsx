import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [count,setCount]=useState(15)
 const valueadded=()=>{
  let result=count+1
  if(result >20){
    return ;
  }
  setCount(result)
 }

 const valueminus=()=>{
  let result=count-1
  if(result < 0){
    return ;
  }
  setCount(result)
 }

  return (
    <>
      
      <h1>counter value is {count}</h1>
      <button onClick={valueadded}>Incraese the Value</button>
      <br />
      <br />
      <button onClick={valueminus}>Decraese the value</button>
    </>
  )
}

export default App
