import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const LogmousePosition = e => {
        console.log('mouce mounting updated')
        setY(e.clientY)
        setX(e.clientX)
    }
    useEffect(()=>{
        console.log('useeffct mount')
        window.addEventListener('mousemove',LogmousePosition)

        return(()=>{
            console.log('usefect unmounting!!')
            window.removeEventListener('mousemove',LogmousePosition)
        })
    },[])
  return (
    <div>
        <h1>x - {x} to  Y-{y}</h1>
    </div>
  )
}

export default HookMouse