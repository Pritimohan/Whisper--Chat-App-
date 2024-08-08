import { React, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'



function useConversion() {
  const [conversions, setConversions] = useState([])

  useEffect(() => {
    ; (async () => {
      try {
        const response = await fetch('/api/user/', {
          method: "GET"
        })

        const data = await response.json()
        if (!data) {
          throw new Error(data.error)
        }
        
        setConversions(data)

      } catch (error) {
        toast.error(error.message)
      }
    })()
    
    return () => {setConversions([])}

  }, [])
  return [conversions]

}

export default useConversion;