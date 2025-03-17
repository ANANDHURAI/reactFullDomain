import React, { useEffect, useState } from 'react'

function IntervelEffect() {
    const [count ,setCount] = useState(0)
    const [run , setIsrun]  = useState(false)
    const tick = () => {
        setCount(prev => prev +1)
    }
    useEffect(()=>{
        let intervel
        if(run){
            intervel = setInterval(tick , 500)
            console.log('updateing')
        }
        return(()=>{
            clearInterval(intervel)
        })
    },[run])
  return (
    <div>
        {count}
        <button onClick={()=> setIsrun(true)}>start</button>
        <button onClick={()=> setIsrun(false)}>stop</button>
    </div>
  )
}

export default IntervelEffect