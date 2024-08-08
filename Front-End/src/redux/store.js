import { configureStore } from '@reduxjs/toolkit'
import { loggedInUserData } from './loggedInUserDataSlice.js'
import { selectedConversionSlice } from './SelectedConversionSlice.js'
import { sentMessageStatus } from './setSentMessageStatusSlice.js'
import { onlineUsers } from './onlineUsers.js'


export const store = configureStore({
    reducer: {
        loggedInUserData: loggedInUserData.reducer,
        selectedConversion: selectedConversionSlice.reducer,
        sentMessageStatus: sentMessageStatus.reducer,
        onlineUsers: onlineUsers.reducer
    }
})