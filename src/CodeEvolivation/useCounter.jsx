import {useState} from 'react'

function useCounter(initialvalue = 0, value) {
    const [count , setCount] = useState(initialvalue)
    const Increment = () => {
        setCount(prev => prev + value)
    }
    const Decrement = () => {
        setCount(prev => prev - value)
    }
    const Reset = () => {
        setCount(initialvalue)
    }
  return [count , Increment , Decrement , Reset]
}

export default useCounter