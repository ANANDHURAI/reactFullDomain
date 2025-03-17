import React, { useMemo, useState } from 'react'

function CounterUseMemo() {
    const [ count , setCount] = useState(0)
    const [ count2 , setCount2] = useState(0)
    const hanleCount = () => {
        setCount(count + 1)
    }
    const hanleCount2 = () => {
        setCount2(count2 + 1)
    }

    const isEven = useMemo(()=> {
        let i = 0
        while(i < 2000000) i++
        return count % 2 == 0
    },[count])

  return (
    <div>
        {count} {count2}
        <button onClick={hanleCount}>countOne</button>
        <p>{isEven ? 'Even':'Odd'}</p>
        <button onClick={hanleCount2}>countTwo</button>
    </div>
  )
}

export default CounterUseMemo