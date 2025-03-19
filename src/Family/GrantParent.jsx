import React, { useState } from 'react'
import Parent from './Parent'
import Child from './Child'

function GrantParent() {
    const [count , setCount] = useState(0)
    console.log(' Grand Parent redering')
  return (
    <div>
        
        <button onClick={() => setCount(p => p + 1)}>Grand+</button>
        <Parent count={count}>
            <Child/>
        </Parent>
        
    </div>
  )
}

export default GrantParent