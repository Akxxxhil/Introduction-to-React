import React from 'react'
import { useState } from 'react'

function Input() {
    let[text,setText]=useState('')
    const convertUpper=()=>{
        let newText=text.toUpperCase()
        setText(newText)

    }
    const changeState=(e)=>{
        setText(e.target.value)
    }
    const convertLower=()=>{
      let lowertext=text.toLowerCase()
      setText(lowertext)
    }
  return (
    <>
    
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Anything</label>
  <textarea value={text} onChange={changeState} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  <br/>
  <button onClick={convertUpper} className=' btn btn-primary mx-2'>
convert this to UpperCase
  </button>
  <button onClick={convertLower}  class="btn btn-success mx-2">convert this to LowerCase</button>
</div>
  <p>{text.length} is the total length in the inputbox  and the total words are {text.split(" ").length}</p>


    </>
  )
}

export default Input