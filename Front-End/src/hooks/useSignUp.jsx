import { React } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// reducer import
import { setLoggedInUserData } from '../redux/loggedInUserDataSlice.js';


function useSignUp() {
    const dispatch = useDispatch()
    const navegate = useNavigate()
    const signup = async (inputDatas) => {
        const isSuccess = handleInputsErrors(inputDatas)
        if (!isSuccess) return;

        try {
            const response = await fetch("/api/auth/singup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputDatas)
            })
            const data = await response.json()

            if (data.error) {
                throw new Error(data.error)
            }
            dispatch(setLoggedInUserData(data.newUser))
            localStorage.setItem("jwtToken", JSON.stringify(data.jwtToken))
            localStorage.setItem("authUser", JSON.stringify(data.newUser.fullname))
            localStorage.setItem("authUserId", JSON.stringify(data.newUser._id))
            toast.success("Signed up successfully")
            setTimeout(() => {
                navegate("/")
            }, 100);
        } catch (error) {
            toast.error(error.message)
        }
    }
    return { signup }
}

export default useSignUp


// handleInputsErrors function
function handleInputsErrors(inputDatas) {
    const { fullname, username, password, confirmPassword, email, gender } = inputDatas;

    if (!fullname || !username || !password || !confirmPassword || !email || !gender) {
        toast.error("Please fill all the fields")
        return false
    }
    // check if password is at least 6 characters long
    if (password.length !== 6) {
        toast.error("Password must be at least 6 characters long")
        return false
    }
    // check if password and confirm password match
    if (password !== confirmPassword) {
        toast.error("Password and Confirm Password does not match")
        return false
    }
    return true
}