import React, { useContext, useState } from 'react'
import { StateContext } from '../StateProvider'
import './promptArea.css'

function PromptArea() {
    const {setPrompt}= useContext(StateContext)
    const [input, setInput]= useState('')

    const handleClick = (e)=>{
            setPrompt(input);
            e.preventDefault();           
        }    
  return (
    <div>
        <form className='prompt_area'>
            <input className='prompt_inputArea' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button className='button' onClick={handleClick}>
                Genenrate Image
            </button>
        </form>
    </div>
  )
}

export default PromptArea