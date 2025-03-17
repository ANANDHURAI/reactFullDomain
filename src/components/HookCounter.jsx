import React, { useState } from 'react'

function HookCounter() {
    const [count , setcount] = useState(0)
  return (
    <div>count{count}
    <button onClick={()=>setcount(count+1)}>+</button>
    </div>
    
  )
}

export default HookCounter