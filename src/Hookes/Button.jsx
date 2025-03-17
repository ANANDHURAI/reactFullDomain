import React from 'react'

function Button({onClick, children,text}) {
    console.log(`this ${text} render on ${children}`)
  return (
    <div>
        <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)

