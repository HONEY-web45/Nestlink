import React from 'react'
import { useState,useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
const Input = () => {
      const search=useSearchParams()
    
      const [handle, sethandle] = useState(  "")
     
    const changehandle = (e) => {
        sethandle(e.target.value)
        console.log(handle);
        
      }
    
      useEffect(() => {
        sethandle(search.get("handle") || "")
      
        
      }, [])
  return (
    <div>
       <input type="text" placeholder="Choose a Handle" onChange={ changehandle} value={handle} className="px-6 py-3 rounded-full focus:outline-gray-400" />
    </div>
  )
}

export default Input
