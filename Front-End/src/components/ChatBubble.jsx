import React from 'react'

function ChatBubble(props) {
    const { styles, person,message } = props
    return (
        <>
            <div className={person ? `place-self-start` : `place-self-end`}>
                <div className={` max-w-96 h-fit px-3 py-2 rounded-b-lg text-sm ${person?'rounded-r-lg bg-white  text-black':'rounded-l-lg bg-lightGray text-white'}`}>{message}</div>
                {/* <span className='text-gray text-xs'>11:00</span> */}
            </div>
        </>
    )
}

export default ChatBubble