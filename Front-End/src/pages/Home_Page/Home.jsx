import React from 'react'
import SideBar from '../../components/SideBar.jsx'
import ChatArea from '../../components/ChatArea.jsx'

function Home() {
    return (
        <>
            <div className=' h-screen w-screen p-12 flex justify-center items-center '>
                <div className=' w-full h-full flex items-center justify-center p-2 gap-2'>
                    <SideBar />
                    <ChatArea/>
                    
                </div>

            </div>

        </>
    )
}

export default Home