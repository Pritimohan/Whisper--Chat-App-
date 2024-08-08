import { createSlice } from '@reduxjs/toolkit'

export const loggedInUserData = createSlice({
    name: "loggedInuserData",
    initialState: {
        userData: {}
    },
    reducers: {
        setLoggedInUserData: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const { setLoggedInUserData } = loggedInUserData.actions
export default loggedInUserData.reducer;