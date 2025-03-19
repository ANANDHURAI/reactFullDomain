import React from 'react'
import Child from './Child'

function Parent({count}) {
    console.log('parent component')
  return (
    <div>
        <h1>{count}</h1>
        <Child/>
    </div>
  )
}

export default Parent