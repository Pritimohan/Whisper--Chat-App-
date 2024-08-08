import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import { useDispatch } from 'react-redux'
import { setOnlineUsers } from '../redux/onlineUsers'


function useIsOnline() {
    const [socket, setSocket] = useState(null)
    const authUserId = JSON.parse(localStorage.getItem("authUserId"))
    const dispatch = useDispatch()

    useEffect(() => {
        if (authUserId) {
            const socket = io("http://localhost:4000", {
                query: {
                    userId: authUserId
                }
            })

            setSocket(socket)
            socket.on('getOnlineUsers', (users) => {
                dispatch(setOnlineUsers(users))
            })

            return () => socket.close()
        }
        else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }

    }, [])

    return [socket]
}

export default useIsOnline