import React from 'react'

function Count({value}) {
    console.log(`this render on ${value}`)
  return (
    <div>
        {value}
    </div>
  )
}

export default React.memo(Count)