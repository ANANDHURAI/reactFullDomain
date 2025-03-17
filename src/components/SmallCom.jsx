import React, { useContext } from 'react'
import { PhoneConext } from './CustomContext'

function SmallCom() {
    const{devname , role} = useContext(PhoneConext)
  return (
    <div>hello {devname} you are {role}</div>
  )
}

export default SmallCom