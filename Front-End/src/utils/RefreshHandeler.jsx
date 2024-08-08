import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function RefreshHandeler({ setIsAuthenticated }) {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (localStorage.getItem("jwtToken")) {
            setIsAuthenticated(true)
            if (location.pathname == "/login" || location.pathname == "/signup") {
                navigate("/", { replace: false })
            }
        }
    }, [navigate, location, setIsAuthenticated])



    return (
        null
    )
}

export default RefreshHandeler