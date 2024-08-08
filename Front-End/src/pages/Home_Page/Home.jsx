import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
// hooks
import useIsOnline from '../../hooks/useIsOnline.jsx'
// component import
import SideBar from '../../components/SideBar.jsx'
import ChatArea from '../../components/ChatArea.jsx'
import NoChatSelected from '../../components/NoChatSelected.jsx'





function Home() {
    // const user = JSON.parse(localStorage.getItem('authUser'))
    const selectedUser = useSelector(state => state.selectedConversion.selectedUser)
    // console.log(selectedUser);
    useIsOnline()
    return (
        <>
            <div className=' h-screen w-screen p-12 flex justify-center items-center '>
                <div className=' w-full h-full flex items-center justify-center p-2 gap-2'>
                    <SideBar />{
                        selectedUser ? <ChatArea selectedUser={selectedUser} /> : <NoChatSelected />
                    }

                </div>
            </div>
        </>
    )
}

export default Home