import { createSlice } from '@reduxjs/toolkit'

export const onlineUsers = createSlice({
    name: "onlineStatus",
    initialState: {
        users:[]
    },
    reducers: {
        setOnlineUsers(state, action) {
            state.users = action.payload;
        }
    }

})

export const { setOnlineUsers } = onlineUsers.actions;
export default onlineUsers.reducer;