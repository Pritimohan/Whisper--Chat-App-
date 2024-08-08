import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// reducer import
import { setSelectedUser } from '../redux/SelectedConversionSlice'

function useLogout() {

    const navegate = useNavigate()
    const dispatch = useDispatch()
    const logout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: "POST"
            })
            const data = await response.json()
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("jwtToken")
            localStorage.removeItem("authUser")
            localStorage.removeItem("authUserId")
            dispatch(setSelectedUser(null))

            toast.success(data.message)

            navegate('/login')

        } catch (error) {
            toast.error(error.message)
        }

    }

    return [logout]
}

export default useLogout