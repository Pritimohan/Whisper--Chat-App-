import React from 'react'
import { useSelector } from 'react-redux';


function ChatBubble(props) {
    const { styles, senderId, message } = props;
    const selectedUser = useSelector(state => state.selectedConversion.selectedUser._id);
    return (
        <>
            <div className={senderId !== selectedUser ? `place-self-end` : `place-self-start`}>
                <div className={` max-w-96 h-fit px-3 py-2 rounded-b-lg  ${senderId !== selectedUser ? 'rounded-l-lg bg-lightGray text-white' : 'rounded-r-lg bg-white  text-black'}`}>{message}</div>
                {/* <span className='text-gray text-xs'>11:00</span> */}
            </div>
        </>
    )
}

export default ChatBubble