import React from 'react'
import { useState } from 'react'

export const TodoFooter = ({nrTasks}) => {
    const[counter,setCounter]=useState()
  return (
    
    <div style={{position:'fixed',bottom:'10px',right:'10px',color:'white'}}>
      Tasks left:{nrTasks}
    </div>
  )
}


