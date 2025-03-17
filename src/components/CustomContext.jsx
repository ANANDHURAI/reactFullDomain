import React, { createContext } from 'react'
import SmallCom from './SmallCom';

export const PhoneConext = createContext()

function CustomContext() {
    
    console.log("CustomContext component rendered"); 
    
  return (
    <div>

        <h2>this is the CustomContext pages</h2>
        <PhoneConext.Provider value={{devname:'Anand' , role : 'Developer'}}>
            <SmallCom/>
        </PhoneConext.Provider>
    </div>
  )
}

export default CustomContext