import React, { useEffect, useRef } from 'react'

function InputComRef() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input type="text"
        ref={inputRef}
        placeholder='enter'
         />
    </div>
  )
}

export default InputComRef