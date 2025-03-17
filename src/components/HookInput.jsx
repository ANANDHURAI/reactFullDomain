import React, { useState } from 'react'

function HookInput() {
    const [name , Setname] = useState({
        firstname:'',
        lastname : ''
    })

  return (
    <div>
        <input type="text" 
         value={name.firstname}
         onChange={(e)=> Setname({...name , firstname:e.target.value})}
        />
        <input type="text" 
        value={name.lastname}
        onChange={(e)=> Setname({...name , lastname:e.target.value})}
        />
        <h2>your full name is {name.firstname} {name.lastname}  </h2>
    </div>
  )
}

export default HookInput