import React, { useState } from 'react'

function IndepthHook() {
    const [user , setUser] = useState({
        firstname:'Anand',
        age : 20
    })

    const handleClick = ()=>{
        const temp = {...user}
        temp.firstname='Karthi',
        temp.age = 22
        setUser(temp)
    }
    console.log('Hokk rendering')
  return (
    <div>
        <h1>currect : {user.firstname} and {user.age}</h1>
        <button onClick={handleClick}>Click to Change</button>
    </div>
  )
}

export default IndepthHook