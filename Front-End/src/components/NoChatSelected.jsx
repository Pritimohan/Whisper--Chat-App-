import React from 'react'

function NoChatSelected() {
    const userName = JSON.parse(localStorage.getItem("authUser"))
    return (
        <>
            <div className=' bg-black grow h-full rounded-3xl flex items-center justify-center flex-col overflow-hidden px-4 '>
                <h4 className='text-white text-3xl'>Hi! {userName} Welcome back</h4>
            </div>
        </>
    )
}

export default NoChatSelected