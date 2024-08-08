
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
// reducer import
import { setLoggedInUserData } from '../redux/loggedInUserDataSlice.js';




function useLogin() {
    const navegate = useNavigate()

    const dispatch = useDispatch();
    const login = async (loginDetails) => {
        const isSuccess = handleInputsErrors(loginDetails);
        if (!isSuccess) return;
        try {
            const response = await fetch('/api/auth/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginDetails),
            })
            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }
            if (!data.jwtToken) {
                toast.error("Could not login")
            }
            dispatch(setLoggedInUserData(data.userData))
            localStorage.setItem("jwtToken", JSON.stringify(data.jwtToken))
            localStorage.setItem("authUser", JSON.stringify(data.userData.fullname))
            localStorage.setItem("authUserId", JSON.stringify(data.userData._id))
            toast.success("Logged in successfully")
            setTimeout(() => {
                navegate("/")
            }, 100);



        } catch (error) {
            toast.error(error.message)
        }
    }

    return { login }
}

export default useLogin

function handleInputsErrors(loginDetails) {
    const { username, password } = loginDetails;
    if (!username || !password) {
        toast.error("Please fill all the fields");
        return false;
    }

    return true;
}