import { createSlice } from "@reduxjs/toolkit";

export const sentMessageStatus = createSlice({
    name: 'SentMessageStatus',
    initialState: {
        sentMessageStatus: null,
    },
    reducers: {
        setSentMessageStatus: (state, action) => {
            state.sentMessageStatus = action.payload
        }
    }

})

export const { setSentMessageStatus } = sentMessageStatus.actions
export default sentMessageStatus.reducer