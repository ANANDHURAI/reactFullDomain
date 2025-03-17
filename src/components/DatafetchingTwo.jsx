import React, { useReducer,useEffect  } from 'react'
import axios from 'axios'


const initialState = {
    loading :true,
    post:{},
    error: ""
}
const reducer = (state , action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                post : {},
                error:'Something Went Wrong!'
            }
        default:
            return state
    }
}
function DatafetchingTwo() {

    const[state , dispatch] = useReducer(reducer , initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/11')
        .then(reseponse => {
            dispatch({type:'FETCH_SUCCESS', payload:reseponse.data})
        })
        .catch(() => {
            dispatch({type:'FETCH_ERROR'})
        })
    },[])

  return (
    <div>
        <h1>DatafetchingTwo</h1>
        {state.loading ? 'loading data...' : <p>{state.post.title}</p>}
        {state.error ? state.error : null}
    </div>
    
  )
}

export default DatafetchingTwo