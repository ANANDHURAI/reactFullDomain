import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state ,action) =>{
    switch(action.type){
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1 
    }
}
export const UseReducer = () => {
    const [state , dispatch] = useReducer(reducer , initialState)
    console.log(`use reducer reder ${state} times`)
  return (
    <div>
        {state}
        <button onClick={()=> dispatch({type:'increment'})}>increment</button>
        <button onClick={()=> dispatch({type:'decrement'})}>decrement</button>
    </div>
  )
}
