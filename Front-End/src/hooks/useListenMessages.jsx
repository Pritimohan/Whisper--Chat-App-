import React, { useEffect } from 'react'
import useIsOnline from './useIsOnline'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/SelectedConversionSlice'

function useListenMessages() {
    const [socket] = useIsOnline()
    const messages = useSelector((state) => state.selectedConversion.messaages);
    const dispatch = useDispatch()

    useEffect(() => {
        socket?.on("newmessage", (newmessage) => {
            dispatch(setMessages([...messages, newmessage]))
        })
        
        return () => socket?.off('newmessage')
    }, [socket, messages, dispatch])
}

export default useListenMessages