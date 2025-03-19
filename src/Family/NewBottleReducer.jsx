import React, { useReducer } from 'react'

const initialState = {
    count:0
  }
  
const reducer = (state=initialState , action) => {
    switch(action.type){
      case 'increment':
        return {...state , count : state.count + action.value}
      case 'decrement':
        return {...state , count : state.count - action.value}
    case 'reset':
        return initialState
    default:
        return state

    }
}
function NewBottleReducer() {
    const [state , dispatch] = useReducer(reducer , initialState)

  return (
    <div>
        <h1>count = {state.count}</h1>
        <button onClick={()=> dispatch({type:'increment' , value:10})}>increment</button>
        <button onClick={()=> dispatch({type:'decrement' , value : 5})}>decrement</button>
        <button onClick={()=> dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default NewBottleReducer