import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer , setTimer] = useState(1)

    const inputIntervel = useRef()
    useEffect(()=>{
        inputIntervel.current = setInterval(()=>{
            setTimer(prev => prev + 1)
        },500)
        return (()=>clearInterval(inputIntervel.current))
    },[])

  return (
    <div>HookTimer
        <h1>{timer}</h1>
        <button onClick={()=>clearInterval(inputIntervel.current)}>stop</button>
    </div>
    
  )
}

export default HookTimer

