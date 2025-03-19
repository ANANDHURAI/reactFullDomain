import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DatafetchingOne() {
    const [loading , setLoadig] = useState(true)
    const [post , setPost] = useState({})
    const [error , setError] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(reseponse => {
            setLoadig(false)
            setPost(reseponse.data)
            setError('')
            console.log(reseponse.data)
        })
        .catch(error => {
            console.log(error)
            setLoadig(false)
            setError('something went wrong!')
            setPost({})
        })
    },[])
  return (
    <div>
        <h1>data fetch</h1>
        {loading ? 'loading data...' : <p>{post.title}</p>}
        {error ? error : null}
    </div>
  )
}

export default DatafetchingOne

