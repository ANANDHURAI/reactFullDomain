import  { useEffect } from 'react'

function useDoumentTitle(count) {
    useEffect(()=>{
        document.title = `count ${count}`
    },[count])
  return (
    <div>
        
    </div>
  )
}

export default useDoumentTitle
