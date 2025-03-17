import React, { useEffect, useState } from 'react'

function HookEffectOne() {
    const [count ,setCount] = useState(0)
    const [name , setName] = useState('')
    useEffect(()=>{
        console.log('useffect updating.')
        document.title = `cliked ${count} times`
        console.log('Rendering...')
    } ,[count])
  return (
    <div>
        <input type="text" value={name} onChange={e=> setName(e.target.value) } />
        <button onClick={()=> setCount(count +1)}>{count}</button>
    </div>
  )
}

export default HookEffectOne