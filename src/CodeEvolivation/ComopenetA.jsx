import React from 'react'
import useCounter from './useCounter'

function ComopenetA() {
    const [count, Increment , Decrement , Reset] = useCounter(0,5)
  return (
    <div>
        <h1>count = {count}</h1>
        <button onClick={Increment}> +</button>
        <button onClick={Decrement}> -</button>
        <button onClick={Reset}> reset</button>
    </div>
  )
}

export default ComopenetA