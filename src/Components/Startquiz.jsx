import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Startquiz = () => {
    const navigate=useNavigate()
  return (
    <div>
        <h1>Start Quiz</h1>
        {setTimeout(() => {
            <div class="loader"> 
            <div class="loader-inner"></div> 
        </div>
            
        }, 2000)}
        
        {navigate("/counter")}
    </div>
  )
}
