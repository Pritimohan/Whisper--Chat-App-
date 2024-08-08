import { createSlice } from "@reduxjs/toolkit";

export const selectedConversionSlice = createSlice({
    name: "selectedConversionSlice",
    initialState: {
        selectedUser: null,
        messaages: []
    },
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        setMessages: (state, action) => {
            state.messaages = action.payload;
        }
    }
})

export const { setSelectedUser, setMessages } = selectedConversionSlice.actions
export default selectedConversionSlice.reducer