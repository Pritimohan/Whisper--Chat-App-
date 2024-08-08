
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function useSearchUsers(searchQuery) {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        (
            async () => {
                try {
                    if (searchQuery < 2) return null
                    const response = await fetch(`api/user/search/?q=${searchQuery}`)
                    const data = await response.json()
                    if (data) {
                        setSearchResult(data.searchResult)
                        console.log("Data:", data.searchResult);
                    }

                } catch (error) {
                    toast.error(error.message)
                }
            }
        )()
        return () => setSearchResult([])
    }, [searchQuery])


    return [searchResult]

}

export default useSearchUsers