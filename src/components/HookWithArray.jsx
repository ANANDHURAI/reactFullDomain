import React, { useState } from 'react'

function HookWithArray() {
    const [items , setitems] = useState([])

    const addtoList = () => {
        setitems([...items,{
            id:items.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
    }
  return (
    <div>
        <button onClick={addtoList}>add</button>
        {items.map(item => <li key={item.id}>{item.value}</li>)}


    </div>
  )
}

export default HookWithArray