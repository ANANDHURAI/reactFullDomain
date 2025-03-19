import React, { useState } from 'react'

function UseState() {
    const [count , setCount] = useState(0)
    console.log('redering')
  return (
    <div>
        {count}
        <button onClick={() => setCount(p => p + 1)}>+</button>
        <button onClick={()=> setCount(5)}>click5</button>
        <button onClick={() => setCount(1)}>click1</button>
    </div>
  )
}

export default UseState

