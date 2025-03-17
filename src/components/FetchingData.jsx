import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FetchingData() {
    const [post , setPost] = useState({})
    const [id, setId] = useState(1)
    const [idButton , setIdButton] = useState(0)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    },[idButton])

    const handleClick = () => {
        setIdButton(id)
    }
  return (
    <div>
        {/* {posts.map(post => {
            return<li key={post.id}>{post.title}</li>
        })} */}
        <input type="text"  value={id} onChange={(e) => setId(e.target.value)}/>
        <button onClick={handleClick}>show</button>
        <br />

        <h4>{post.title}</h4>
    </div>
  )
}

export default FetchingData