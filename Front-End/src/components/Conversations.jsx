import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// reducer import
import { setSelectedUser } from '../redux/SelectedConversionSlice'

function Conversations(props) {
    const { styles, hover, conversion ,bg} = props

    const dispatch = useDispatch()
    const selectedConversion = useSelector(state => state.selectedConversion.selectedUser)
    const onlineUsers= useSelector(state=>state.onlineUsers.users)
    const isSelected = selectedConversion?._id === conversion._id;
    const isOnline = onlineUsers.includes(conversion._id);
    return (
        <>
            <div className={`h-fit w-full rounded-lg flex items-center px-3 py-2 gap-4 cursor-pointer mb-2 transition-all ease-linear delay-75  ${hover ? 'hover:bg-lightGray' : 'none'}
                ${isSelected && bg ? "bg-lightGray" : ""} `} onClick={() => { dispatch(setSelectedUser(conversion)) }}>
                <div className={`bg-white ${styles} rounded-full overflow-hidden`}><img className=" w-full h-full object-cover" src={conversion.profilepicture} alt="dp"></img></div>
                <div>
                    <div className='text-white'>{conversion.username}</div>
                    <span className='text-sm text-gray'>{isOnline ? "Online" : "Offline"}</span>
                </div>
            </div>
        </>
    )
}

export default Conversations