import React from 'react'

function Tilte() {
    console.log(`title render on`)
  return (
    <div>THis is Use Callback Hook</div>
  )
}

export default React.memo(Tilte)