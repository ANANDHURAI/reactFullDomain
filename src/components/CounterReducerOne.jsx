import React, { useReducer } from 'react'
const initialState = {
    firstCount : 0,
    secondCount : 5
}
const reducer = (state ,action) => {
    switch(action.type){
        case 'increment' :
            return {...state , firstCount: state.firstCount + action.value}
        case 'decrement' :
            return {...state , firstCount: state.firstCount - action.value}
        case 'increment2' :
            return {...state , secondCount: state.secondCount + action.value}
        case 'decrement2' :
            return { ...state , secondCount: state.secondCount - action.value}
        case 'reset' :
            return initialState
        default:
            return state
    }
}
function CounterReducerOne() {
    const [count , dispatch] = useReducer(reducer , initialState)
  return (
    <div>
        <h2>first : {count.firstCount}</h2>
        <h2>second : {count.secondCount}</h2>
        <button onClick={()=> dispatch({type:'increment' , value : 1})}>increment</button>
        <button onClick={()=> dispatch({type:'decrement' , value : 1})}>decrement</button>
        <button onClick={()=> dispatch({type:'decrement' , value : 10})}>decrement10</button>
        <button onClick={()=> dispatch({type:'increment' , value : 10})}>increment10</button>
        <button onClick={()=> dispatch({type:'increment2' , value : 2})}>increment2Approch</button>
        <button onClick={()=> dispatch({type:'decrement2' , value : 2})}>decrement2Approch</button>
        <button onClick={()=> dispatch({type : 'reset'})}>reset</button>
    </div>
  )
}

export default CounterReducerOne